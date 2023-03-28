const express = require('express');
const app = express();
const cors = require('cors');
const admin = require("firebase-admin");
require('dotenv').config()

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const serviceAccount = require("./firestore.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore()

app.use(express.static("public"))
app.use(express.json())
app.use(cors({ origin: true }))
app.use(express.urlencoded({ extended: true }))



//stripe session checkout function
app.post("/create-payment-session", async (req, res) => {
    const items = req.body.products;

    const allProducts = await Promise.all(
        items.map(async (item) => {
            const productsRef = db.collection('products').doc(`${item.category}`).collection('items').doc(`${item.id}`)
            const doc = await productsRef.get()
            const product = doc.data()

            return {
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: product.name,
                        images: [product.image[0]],
                    },
                    unit_amount: Math.round(product.price * 100),
                },
                quantity: item.quantity,
            };
        })
    )

    const session = await stripe.checkout.sessions.create({
        line_items: allProducts,
        mode: 'payment',
        success_url: process.env.MY_APP_URL + "?success=true",
        cancel_url: process.env.MY_APP_URL + "?canceled=true",
    });
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).send({ url: session.url })
});

//add product to firestore
app.post('/create', async (req, res) => {
    const product = {
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
    }

    console.log(req.body);
    const response = await db.collection('products').add(product)



    res.status(200).send(response)
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running at Port: ${PORT}...`);
})
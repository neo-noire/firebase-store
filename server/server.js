const express = require('express');
const app = express();
const cors = require('cors');
const stripe = require("stripe")('sk_test_51MhD15B0niWLCqAgRKqemppdz85d9VTbTGR1U3MlWhEf4LIk2Yii8lIRcRbdCvuXqx7lOcI0PjURCawIbPVokZ0800RCffgbgK');

const admin = require("firebase-admin");

const serviceAccount = require("./firestore.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore()

app.use(express.static("public"))
app.use(express.json())
app.use(cors({ origin: true }))
app.use(express.urlencoded({ extended: true }))


// Get all available categories of products
app.get('/categories', async (req, res) => {

    const catRef = db.collection('products')
    const doc = await catRef.get()
    const array = []
    doc.forEach(item => array.push(item.id))

    res.status(200).send(array)
})

//get products list from specific category
app.get('/products', async (req, res) => {

    const productsRef = db.collection('products').doc(`${req.body.category}`).collection('items')
    const doc = await productsRef.get()
    const arrayOfProducts = []
    doc.forEach(item => arrayOfProducts.push(item.data()))

    res.status(200).send(arrayOfProducts)
})

//get specific product
app.get('/product', async (req, res) => {

    const productsRef = db.collection('products').doc(`${req.body.category}`).collection('items').doc(`${req.body.name}`)
    const doc = await productsRef.get()

    res.status(200).send(doc.data())
})

//get list of products from cart
app.get('/cart/products', async (req, res) => {
    const products = req.body.products;

    const allProducts = await Promise.all(
        products.map(async (item) => {
            const productsRef = db.collection('products').doc(`${item.category}`).collection('items').doc(`${item.name}`)
            const doc = await productsRef.get()
            return doc.data()
        })
    )

    res.status(200).send(allProducts)
})

//stripe session checkout function
app.post("/create-payment-session", async (req, res) => {
    const items = req.body.products;

    const allProducts = await Promise.all(
        items.map(async (item) => {
            const productsRef = db.collection('products').doc(`${item.category}`).collection('items').doc(`${item.name}`)
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
        success_url: `http://127.0.0.1:5173?success=true`,
        cancel_url: `http://127.0.0.1:5173?canceled=true`,
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
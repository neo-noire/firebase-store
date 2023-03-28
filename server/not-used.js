
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
const express = require('express')
const db = require('./models')
const bodyParser = require('body-parser');
const app = express()
const cors = require('cors')

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

db.sequelize.sync({ force: false }).then(() => {
  app.get('/', (req, res) => {
    res.send('hello')
  })

  app.get('/product', async (req, res) => {
    let productList = await db.Product.findAll()
    res.json(productList)
  })

  app.get('/product-category', async (req, res) => {
    let productCategoryList = await db.ProductCategory.findAll()
    res.json(productCategoryList)
  })

  /*
  {
    totalPrice: 50000,
    orderList: [.....],

  }
  */

  app.post('/add-order', async (req, res) => {
    let orderItemList = []
    req.body.orderList.map(order => {
      orderItemList.push({
        productName: order.product.name,
        productPrice: order.product.price,
        amount: order.amount
      })
    })
    let result = await db.Order.create({
      totalPrice: req.body.totalPrice,
      OrderItems: orderItemList
    }, {
      include: [db.OrderItem]
    })
    res.json(result)
  })

  app.put('/edit-product/:productId', async (req, res) => {
    let id = req.params.productId
    let reqQuery = {}
    Object.keys(req.body).map((key, index) => {
      reqQuery[key] = req.body[key]
    })
    let result = db.Product.update(
      reqQuery,
      { where: { id: id } })
    res.json(result)
  })

  app.delete('/delete-product/:productId', async (req, res) => {
    let id = req.params.productId
    db.Product.destroy({
      where: { id: id }
    })
    res.json()
  })

  app.listen(3030, () =>
    console.log("Server is running on http://localhost:3030."))
})
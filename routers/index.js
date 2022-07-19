const { Router } = require("express");
const router = Router();

const productsRouter = require('./productsRouter');
const chatRouter = require('./chatRouter') ;//lo manejo desde app.js porque me da error
const fakerRouter = require('./fakerRouter');
const sessionRouter = require('./sessionRouter');
const cartRouter = require('./cartRouter');

router.use('/productos', productsRouter)
router.use('/chat', chatRouter)
router.use('/fake', fakerRouter)
router.use('/', sessionRouter)
router.use('/cart', cartRouter)

module.exports = router;
const router = require('express').Router()
const apiMiddleware = require('../middliewares/apiKeys')


router.get('/', (req, res) => {
    res.render('index', {
        title: 'Home Page'
    })
})
router.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page'
    })
})
router.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact Page'
    })
})

router.get('/api/products', apiMiddleware, (req, res) => {
    res.json(
        [
            { id: 1, product: 'Godraj' },
            { id: 2, product: 'Fridge' }

        ])
})

module.exports = router;
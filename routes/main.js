const express = require ('express')
const router = express.Router()
const mainController = require ('../controllers/mainController');
const heroesController = require ('../controllers/heroesController')



router.get('/', mainController.index)

router.get('/heroes',heroesController.heroes)

router.get('/heroes/detalles/:idHeroe',heroesController.detalle)

router.get('/heroes/bio/:id/:ok?',heroesController.bio)

router.get('/creditos',mainController.creditos)

router.get('/*',mainController.estado)

module.exports = router 
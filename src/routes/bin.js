const binController= require('../app/controllers/binController')
const router= require('express').Router()

router.delete('/delete/:id',binController.remove)
router.get('/restore/:id',binController.restore)
router.get('/',binController.show)

module.exports= router;
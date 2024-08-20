const courseController= require("../app/controllers/courseController");

const router= require('express').Router();


router.use('/create',courseController.create)
router.post('/save/:id',courseController.save)
router.get('/edit/:id',courseController.edit)
router.delete('/delete/:id',courseController.delete)
router.put('/:id',courseController.update)
router.get('/:id',courseController.detail);
router.get('/',courseController.show);


module.exports= router;
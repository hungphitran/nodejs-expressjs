const courseController= require("../app/controllers/courseController");

const router= require('express').Router();


router.use('/create',courseController.create)
router.post('/save',courseController.save)
router.get('/:name',courseController.detail);
router.get('/',courseController.show);


module.exports= router;
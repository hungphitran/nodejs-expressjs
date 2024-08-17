const meController= require("../app/controllers/meController");

const router= require('express').Router();

router.get('/stored/courses',meController.storeCourse)


module.exports= router;
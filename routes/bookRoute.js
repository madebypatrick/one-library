const express= require('express')
const bookController =require ('../controllers/bookController')

const router = express.Router();

router.get("/", bookController.getBooks);
router.get('/:id', bookController.getBook);
router.post("/", bookController.createBook);

module.exports = router;
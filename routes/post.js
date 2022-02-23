const express = require("express");
const postController = require("../controllers/post");


const router = express.Router();

router.get("/", postController.getDetail);
router.post("/create", postController.addStudent);
router.get("/search", postController.searchStudent)



module.exports = router;
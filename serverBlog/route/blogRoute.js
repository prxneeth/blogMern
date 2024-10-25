const express = require('express')
const blogRouter = express.Router()

const {
    fetchListOfBlogs, deleteAblog, updateAblog, addNewBlog
} = require('../controller/blogController')

blogRouter.get("/", fetchListOfBlogs)
blogRouter.post("/add", addNewBlog)
blogRouter.put("/update/:id", updateAblog)
blogRouter.delete("/delete/:id", deleteAblog)

module.exports = blogRouter
const express = require('express');
const route = express.Router();
const {storeCategory} = require("../controllers/categoryController");
const {createBlog, page, blog_list} = require("../controllers/blogsController");

route.post('/store-category', storeCategory);
route.post('/create-blog', createBlog);
route.get('/page-data/:slug', page);
route.get('/blog-list', blog_list);

module.exports = route;
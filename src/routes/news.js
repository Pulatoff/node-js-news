const express = require("express");
const newsRouter = express.Router();
const axios = require("axios");
newsRouter.get("/", async (req, res) => {
  try {
    const newsAPI = await axios.get(`https://raddy.dev/wp-json/wp/v2/posts/`);

    res.render("news", { articles: newsAPI.data });
  } catch (error) {
    console.log(error.message);
  }
});

newsRouter.get("/article/:id", async (req, res) => {
  let articleId = req.params.id;
  try {
    const newsAPI = await axios.get(
      `https://raddy.dev/wp-json/wp/v2/posts/${articleId}`
    );

    res.render("newsSingle", { article: newsAPI.data });
  } catch (error) {
    console.log(error.message);
  }
});

newsRouter.post("/", async (req, res) => {
  let articleId = req.body.search;
  try {
    const newsAPI = await axios.get(
      `https://raddy.dev/wp-json/wp/v2/posts?search=${articleId}`
    );
    res.render("newsSearch", { articles: newsAPI.data });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = newsRouter;

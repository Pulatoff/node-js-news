const express = require("express");
const newsRouter = express.Router();
const axios = require("axios");
newsRouter.get("/", async (req, res) => {
  try {
    const newsAPI = await axios.get(
      `https://newsapi.org/v2/everything?q=tesla&from=2022-06-12&sortBy=publishedAt&apiKey=ee2381d8fce84333a35e732b945c8584`
    );
    res.render("news", { articles: newsAPI.data.articles });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = newsRouter;

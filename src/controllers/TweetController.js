const Tweet = require("../models/tweet");

module.exports = {
  async index(req, res) {
    const tweets = await Tweet.find().sort("-createdAt");

    return res.status(200).send(tweets);
  },

  async store(req, res) {
    const tweet = await Tweet.create(req.body);

    req.io.emit("tweet", tweet);

    return res.status(200).send(tweet);
  }
};

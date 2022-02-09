import twitterClient from "../twitterClient";

module.exports = async (req, res) => {
  if (req.method === "POST") {
    await twitterClient.tweets.statusesRetweetById({ id: req.query.id });

    res.status(200).send("Tweet retweeted!");
  } else {
    res.status(405).send("Method not allowed");
  }
};

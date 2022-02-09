import twitterClient from "../twitterClient";

module.exports = async (req, res) => {
  if (req.method === "GET") {
    const { favorited } = await twitterClient.tweets.statusesShow({
      id: req.query.id,
    });

    res.status(200).json({ liked: favorited });
  } else {
    res.status(405).send("Method not allowed");
  }
};

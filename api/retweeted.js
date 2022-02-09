import twitterClient from "../twitterClient";

module.exports = async (req, res) => {
  if (req.method === "GET") {
    const { retweeted } = await twitterClient.tweets.statusesShow({
      id: req.query.id,
    });

    res.status(200).json({ retweeted: retweeted });
  } else {
    res.status(405).send("Method not allowed");
  }
};

import { TwitterClient } from "twitter-api-client";

const twitterClient = new TwitterClient({
  apiKey: "SmZCiK6saWnIjEqTSGBsLQlDI",
  apiSecret: "6VNAq7hXdQp807GZyL5EQRYecs3h22StvjitXm0deu3zIvVh27",
  accessToken: "987805293642944512-Qc2MBDRrFiz3EafBq5dbar1nlcqcGHA",
  accessTokenSecret: "nH73WBKhEfWifV67gfWml6azlP4ZZ4YHXXhankbqYqt55",

  disableCache: true,
});

export default twitterClient;

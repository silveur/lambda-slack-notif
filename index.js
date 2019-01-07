exports.handler = function (event, context, callback)
{
  const Slack = require('slack-node');
  var slack = new Slack();
  slack.setWebhook(process.env.SLACK_URI);
  console.log(event);
  slack.webhook(
  {
    channel: process.env.SLACK_CHANNEL,
    username: process.env.SLACK_USERNAME,
    icon_emoji: process.env.SLACK_IMG,
    text: `${event.detail.pipeline} ----> ${event.detail.state}`
  },
  (err, res) =>
  {
    if(err) console.log(err);
    callback(err, JSON.stringify(`All good`));
  });
};

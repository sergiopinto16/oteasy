// import fetch from 'node-fetch';
require('dotenv').config()

// Replace with the webhook URL you saved earlier
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

async function sendSlackNotification(message,username="DB-bot") {
  const payload = {
    text: message,
    username:username,
    icon_emoji: ":ghost:"
  };

  const response = await fetch(SLACK_WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (response.ok) {
    console.log('Slack notification sent successfully!');
  } else {
    console.error(`Error sending Slack notification: ${response.statusText}`);
  }
}

module.exports = sendSlackNotification
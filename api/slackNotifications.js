// import fetch from 'node-fetch';

// Replace with the webhook URL you saved earlier
const SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/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';

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
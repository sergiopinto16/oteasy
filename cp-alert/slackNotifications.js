// import fetch from 'node-fetch';
require('dotenv').config()

// Replace with the webhook URL you saved earlier


//add channel to suprimido trains
async function sendSlackNotification(message, username = "CP-bot", station = 'CETE', suprimido = false) {
    const payload = {
        text: message,
        username: username,
        icon_emoji: ":ghost:"
    };

    let URL_STATION = process.env.SLACK_URL_NOTIFICATIONS_CP_ALERT_CETE_SAOBENTO;
    if (suprimido) {
        URL_STATION = process.env.SLACK_URL_NOTIFICATIONS_CP_ALERT_CETE_SAOBENTO_SUPRIMIDO;
        if (station != 'CETE') {
            URL_STATION = process.env.SLACK_URL_NOTIFICATIONS_CP_ALERT_SAOBENTO_CETE_SUPRIMIDO;
        }
    } else {
        if (station != 'CETE') {
            let URL_STATION = process.env.SLACK_URL_NOTIFICATIONS_CP_ALERT_SAOBENTO_CETE;
        }
    }

    const response = await fetch(URL_STATION, {
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
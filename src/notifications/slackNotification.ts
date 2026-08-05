import axios from 'axios';

export const sendSlackNotification = async (message: string) => {
  await axios.post('https://slack.com/api/chat.postMessage', {
    channel: 'general',
    text: message,
  }, {
    headers: {
      'Authorization': 'Bearer your-slack-token',
    },
  });
};
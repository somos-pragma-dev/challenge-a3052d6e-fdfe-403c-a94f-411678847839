import axios from 'axios';

export const sendWebhookNotification = async (url: string, data: any) => {
  await axios.post(url, data);
};
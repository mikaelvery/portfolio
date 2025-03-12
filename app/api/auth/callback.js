import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { code } = req.query;
    if (!code) {
      return res.status(400).json({ error: 'Code missing' });
    }

    try {
      const response = await axios.post('https://id.twitch.tv/oauth2/token', null, {
        params: {
          client_id: process.env.TWITCH_CLIENT_ID,
          client_secret: process.env.TWITCH_CLIENT_SECRET,
          code,
          grant_type: 'authorization_code',
          redirect_uri: process.env.API_CALLBACK_URL,
        }
      });

      const accessToken = response.data.access_token;
      res.status(200).json({ message: 'Success', accessToken });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

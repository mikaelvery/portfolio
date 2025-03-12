import axios from 'axios';

export default async function handler(req, res) {
  const { code } = req.query; // Récupère le code OAuth envoyé par Twitch

  if (!code) {
    return res.status(400).json({ error: 'Code missing' });
  }

  try {
    // Échange le code contre un access token
    const response = await axios.post('https://id.twitch.tv/oauth2/token', null, {
      params: {
        client_id: process.env.TWITCH_CLIENT_ID,
        client_secret: process.env.TWITCH_CLIENT_SECRET,
        code,
        grant_type: 'authorization_code',
        redirect_uri: process.env.API_CALLBACK_URL, // URL de callback
      },
    });

    // enregistre cet access token pour l'utiliser plus tard
    const accessToken = response.data.access_token;
    const refreshToken = response.data.refresh_token;

    // Gestion du token dans la base de données ou le stocke dans la session, par exemple.
    res.status(200).json({ accessToken, refreshToken });

  } catch (error) {
    console.error('Erreur lors de la récupération du token Twitch:', error);
    res.status(500).json({ error: 'Error fetching access token' });
  }
}
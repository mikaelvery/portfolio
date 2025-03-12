// app/api/auth/callback/route.ts
import axios from 'axios';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get('code'); // Récupérer le code d'autorisation depuis l'URL

  if (!code) {
    return new Response('Code missing', { status: 400 });
  }

  try {
    const response = await axios.post('https://id.twitch.tv/oauth2/token', null, {
      params: {
        client_id: process.env.TWITCH_CLIENT_ID,
        client_secret: process.env.TWITCH_CLIENT_SECRET,
        code,
        grant_type: 'authorization_code',
        redirect_uri: process.env.API_CALLBACK_URL,
      },
    });

    const accessToken = response.data.access_token;

    // Retourner un message de succès ou rediriger vers une autre page si nécessaire
    return new Response(JSON.stringify({ message: 'Success', accessToken }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Internal Server Error', { status: 500 });
  }
}

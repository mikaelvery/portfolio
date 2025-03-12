import axios, { AxiosError } from 'axios';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get('code'); // Récupérer le code d'autorisation depuis l'URL

  if (!code) {
    console.error('Code is missing');
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

    console.log('Access token:', accessToken);

    // Retourner un message de succès ou rediriger vers une autre page si nécessaire
    return new Response(JSON.stringify({ message: 'Success', accessToken }), { status: 200 });
  } catch (error) {
    // Assure-toi d'utiliser le bon type pour les erreurs Axios
    const axiosError = error as AxiosError;

    console.error('Error while getting access token:', axiosError.response ? axiosError.response.data : axiosError.message);
    return new Response('Internal Server Error', { status: 500 });
  }
}

import axios, { AxiosError } from 'axios';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get('code'); // Récupérer le code d'autorisation depuis l'URL

  // Vérification du code d'autorisation
  if (!code) {
    console.error('Code is missing');
    return new Response('Code missing', { status: 400 });
  }

  try {
    // Vérification des variables d'environnement
    console.log('TWITCH_CLIENT_ID:', process.env.TWITCH_CLIENT_ID);
    console.log('TWITCH_CLIENT_SECRET:', process.env.TWITCH_CLIENT_SECRET);
    console.log('API_CALLBACK_URL:', process.env.API_CALLBACK_URL);

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

    // Retourne le succès avec le token d'accès
    return new Response(JSON.stringify({ message: 'Success', accessToken }), { status: 200 });
  } catch (error) {
    // Gérer l'erreur d'Axios
    const axiosError = error as AxiosError;
    console.error('Error while getting access token:', axiosError.response?.data);
    console.error('Full Axios error:', axiosError);
    return new Response('Internal Server Error', { status: 500 });
  }
}

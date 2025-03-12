import axios from 'axios';

export async function getUserInfo(accessToken: string) {
  try {
    const response = await axios.get('https://api.twitch.tv/helix/users', {
      headers: {
        'Client-ID': process.env.TWITCH_CLIENT_ID,
        'Authorization': `Bearer ${accessToken}`
      }
    });

    console.log(response.data);
    return response.data; // Retourne les données de l'utilisateur
  } catch (error) {
    console.error('Error fetching user info:', error);
    throw new Error('Failed to fetch user info');
  }
}

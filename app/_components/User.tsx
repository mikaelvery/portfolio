import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';

interface UserInfo {
  data: {
    login: string;
    profile_image_url: string | null;
  }[];
}

const UserProfile = ({ accessToken }: { accessToken: string }) => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserInfo = async (accessToken: string) => {
      setLoading(true); // Mettre l'état de "loading" à true avant de commencer la requête
      try {
        const response = await axios.get('https://api.twitch.tv/helix/users', {
          headers: {
            'Authorization': `Bearer ${accessToken}`, // Ajouter le token dans l'en-tête Authorization
            'Client-ID': 'wv2ca4japmzv57lyxxnckb4aecaotb', // Utiliser ton Client-ID ici
          }
        });
        setUserInfo(response.data); // Mettre à jour userInfo avec la réponse de l'API
      } catch (error) {
        setError('Error fetching user data'); // Mettre à jour l'état de l'erreur
      } finally {
        setLoading(false); // Mettre l'état de "loading" à false une fois la requête terminée
      }
    };

    if (accessToken) {
      fetchUserInfo(accessToken);
    }
  }, [accessToken]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>; // Affichage de l'erreur

  const profileImageUrl = userInfo?.data[0]?.profile_image_url;

  return (
    <div>
      <h1>{userInfo?.data[0]?.login}</h1>
      {profileImageUrl ? (
        <Image
          src={profileImageUrl}
          alt="User Profile"
          width={100} // Largeur de l'image (ajuste si nécessaire)
          height={100} // Hauteur de l'image (ajuste si nécessaire)
        />
      ) : (
        <p>No profile image available</p>
      )}
    </div>
  );
};

export default UserProfile;

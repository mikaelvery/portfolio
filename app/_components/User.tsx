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
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get('/api/twitch/user', {
          params: { accessToken }
        });
        setUserInfo(response.data);
      } catch (error) {
        setError('Error fetching user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, [accessToken]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>; // Utilisation de la variable error

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

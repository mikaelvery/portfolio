import { NextApiRequest, NextApiResponse } from 'next';
import { getUserInfo } from './twitchApi';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { accessToken } = req.query;

  if (!accessToken) {
    return res.status(400).json({ error: 'Access token is missing' });
  }

  try {
    const userInfo = await getUserInfo(String(accessToken));
    return res.status(200).json(userInfo);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch user info' });
  }
}

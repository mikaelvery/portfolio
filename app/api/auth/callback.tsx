"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Callback = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("access_token");
    if (token) {
      setAccessToken(token);
      setLoading(false);
    } else {
      setError("Authentication failed or token missing.");
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex flex-col items-center p-6 bg-primary-foreground text-white rounded-lg shadow-md">
      {error ? (
        <div>
          <h1 className="text-2xl text-red-500">{error}</h1>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-bold mb-2">Authentication Successful!</h1>
          <p className="text-sm mb-4 text-center">Access token: {accessToken}</p>
          <button
            onClick={() => router.push("/")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Go to Home
          </button>
        </div>
      )}
    </main>
  );
};

export default Callback;

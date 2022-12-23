import { useEffect } from "react";
import axios from "axios";

export const Home = () => {
  const oAuthRequest = async () => {
    const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;
    const client_secret = process.env.NEXT_PUBLIC_CLIENT_SECRET;
    const redirect_uri = process.env.NEXT_PUBLIC_REDIRECT_URI;
    const code = new URLSearchParams(window.location.search).get("code");
    const grant_type = "authorization_code";
    const authUrl = "https://accounts.jumpseller.com/oauth/token";

    try {
      const response = await axios.post(authUrl, {
        client_id,
        client_secret,
        redirect_uri,
        code,
        grant_type,
      });
      const tokenData = await response.data.access_token;
      await insertPlugin("tokenData");
    } catch (error) {
      console.log(error);
    }
  };

  const insertPlugin = async (token: string) => {
    const authUrl = process.env.NEXT_PUBLIC_JUMPSELLER_API;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const body = {
      app: {
        url: process.env.NEXT_PUBLIC_PIXEL_CDN,
        template: "checkout",
        element: "body",
      },
    };
    try {
      await axios.post(authUrl!, body, config);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    oAuthRequest();
  }, []);

  return (
    <div className="container">
      <img src="../assets/cruz_central.png" alt="" />
      <h1>¡Tu aplicación fue instalada de forma exitosa!</h1>
      <img src="../assets/bciplus.png" alt="" />
    </div>
  );
};

export default Home;

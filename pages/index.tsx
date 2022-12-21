// import Head from "next/head";
// import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import axios from "axios";

export const Home = () => {
  useEffect(() => {
    const httpCall = async () => {
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
        const data = response.data.acces_token;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    httpCall();
  }, []);

  return (
    <div>
      <h1>Hello world!</h1>
    </div>
  );
};

export default Home;

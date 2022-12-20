import axios from "axios";
import React from "react";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();

  React.useEffect(() => {
    const httpCall = async () => {
      const client_id = procces.env.CLIENT_ID;
      const client_secret = procces.env.CLIENT_SECRET;
      const redirect_uri = procces.env.REDIRECT_URI;
      const code = searchParams.get("code");
      const grant_type = "authorization_code";
      const authUrl = "https://accounts.jumpseller.com/oauth/token";
      try {
        const codeRequest = await axios.post(authUrl, {
          client_id,
          client_secret,
          redirect_uri,
          code,
          grant_type,
        });
        localStorage.setItem("tokenData", JSON.stringify(codeRequest.data));
      } catch (error) {
        console.log(error);
      }
    };
    httpCall();
  }, [searchParams]);

  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
};

export default Home;

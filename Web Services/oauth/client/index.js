import qs from "query-string";
import axios from "axios";

function redirectToGithub() {
  const GITHUB_AUTH_URL = "https://github.com/login/oauth/authorize";
  const params = {
    response_type: "code",
    scope: "user",
    client_id: process.env.CLIENT_ID,
    redirect_uri: process.env.REDIRECT_URL,
  };

  const queryStrings = qs.stringify(params);
  const authorizationUrl = `${GITHUB_AUTH_URL}?${queryStrings}`;
  window.location.href = authorizationUrl;
}

window.onload = async () => {
  // button
  document.querySelector(".login").addEventListener("click", redirectToGithub);

  // checa se user está retornando do github
  const { code } = qs.parseUrl(window.location.href).query;

  if (code) {
    try {
        const response = await axios.post(`${process.env.BACK_END_URL}/login`, { code });
        const user = response.data;
        alert("você está logado! Verifique o console");
        console.log(user);
    } catch (err) {
      alert("Ops, deu erro! Verifique o console!");
      console.log(err);
    }
  }
};


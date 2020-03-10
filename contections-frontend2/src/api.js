const API_ROOT = `http://localhost:3000`;

const token = () => localStorage.getItem("token");

const headers = () => {
  return {
    "Content-Type": "application/json",
    Accepts: "application/json",
    Authorization: token()
  };
};

const login = data => {
  console.log("login data: ", data);
  return fetch(`${API_ROOT}/auth`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ user: data })
  }).then(res => {
    console.log(res);
    return res.json();
  });
  // .then(json => {
  //   console.log(json);
  // });
};

const getCurrentUser = () => {
  // console.log("getting current user", headers);
  return fetch(`${API_ROOT}/current_user`, {
    headers: headers()
  }).then(res => {
    console.log(res);
    return res.json();
  });
};

export const api = {
  auth: {
    login,
    getCurrentUser
  }
};

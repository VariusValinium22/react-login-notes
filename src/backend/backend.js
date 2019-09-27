//import { longStackSupport } from "q";

var backend = "https://www.jsonstore.io/935a4f163a8dd133041bdfbf208e398a5f195f45f9befba76dd6aee52ff62bdd"

export const userService = {
  logout,
  LoginUser,
  CreateUser
};

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("username");
  localStorage.removeItem("notes");
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        //logout();
        // location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}


function LoginUser(username, password) {
  const url = backend + "/users/" +username;
//alert("trying to login");
  fetch(url)
  .then(resp => resp.json())
  .then(function(data) {
    console.log(data.result);
    if (password === data.result.password) {
      console.log("logged in");
      localStorage.setItem("username", data.result.username);

    }
    return null;
  })
  .catch(function(error) {
    console.log(error);
  });
}

function CreateUser(usernameVal, passwordVal, emailVal){
  var payload = {
    username: usernameVal,
    password: passwordVal,
    email: emailVal
  };
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(payload)
  };

  return fetch(backend + '/users/' + usernameVal, requestOptions).then(handleResponse).then(user => {
    if (user) {
      user.authdata = window.btoa(usernameVal + ":" + passwordVal);
      //localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("username", usernameVal);
    }
    console.log(localStorage.getItem("username"));
    return user;
  })

    function handleResponse(response) {
      return response.text().then(text => {
        const data = text && JSON.parse(text);
        if(!response.ok) {
        if(response.status === 401) {
    
        }

        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
      return data;
    });
  }
}
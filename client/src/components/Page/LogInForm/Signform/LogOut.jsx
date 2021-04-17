import React, { useContext } from 'react'
import axios from "axios"
import cookie from 'js-cookie'
import { UidContext } from '../../../AppContext'

const LogOut = () =>{

    const uid = useContext(UidContext);
    const removeCookie = (key) => {
    if (window !== "undefined") {
      cookie.remove(key, { expires: 1 });
    }
  };

  const logout = async () => {
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/user/logout`,
      withCredentials: true,
    })
      .then(() => {
        removeCookie("jwt");
        console.log("uid" + uid);
      })
      .catch((err) => {
        window.location = "/";
        console.log(err);
      });
  };

  return <button onClick={logout}> Log out </button>;
}

export default LogOut


import axios from "axios";
import React, { useEffect, useState } from "react";
import LoginPage from "./LoginPage";

export default function ProfilePage () {
  const [userInfo, setUserInfo] = useState(null);
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    if ((token && userId)) {
      let isCancel = false;
      axios({
        method: 'GET',
        url: `https://60dff0ba6b689e001788c858.mockapi.io/users/${userId}`
      }).then(response => {
        if (!isCancel) {
          setUserInfo(response.data.name);
        }
      });
      return () => {
        isCancel = true;
      }
    }
  }, [token,userInfo]);

  return token ? (
    <div>
      Name: {userInfo}<br />
      User ID: {userId}
    </div>
  ) : (
    <div>
      <b>You need to login to continue</b>
      <LoginPage />
    </div>
  );
}

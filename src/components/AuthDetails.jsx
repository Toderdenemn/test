import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import Button from "react-bootstrap/Button";
import "./auth.css";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
        window.location = "/";
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="signout1">
      {authUser ? (
        <>
          <div>
            <Button variant="primary" type="submit" onClick={userSignOut}>
              Гарах
            </Button>
          </div>
        </>
      ) : (
        <p>Гарсан</p>
      )}
    </div>
  );
};

export default AuthDetails;

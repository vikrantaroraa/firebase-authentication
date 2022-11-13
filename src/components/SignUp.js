import React from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

function SignUp() {
  // Google Authentication
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("YE HAI google USER (SignUp.js - line 16):", result);
    } catch (error) {
      console.log("YE HAI google LOGIN ERROR (SignUp.js - line 18):", error);
    }
  };

  // Facebook Authentication
  let existingEmail = null;
  let pendingCred = null;
  const fbProvider = new FacebookAuthProvider();
  const facebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, fbProvider);
      console.log("YE HAI facebook USER (SignUp.js - line 27):", { result });
    } catch (error) {
      console.log("YE HAI ERROR: ", { error });
      // if (error.code === "auth/account-exists-with-different-credential") {
      // existingEmail = error.customData._tokenResponse.email;
      // pendingCred = error.credential;
      // console.log(existingEmail);
      // console.log(pendingCred);

      // const providerId = await auth.fetchProvidersForEmail(error.email);
      // console.log("YE HAI providerId:", providerId);
      // }
      // console.log("YE HAI providerId:", providerId);
      // console.log("YE HAI facebook LOGIN ERROR (SignUp.js - line 29):", {
      //   error,
      // });
    }
  };

  return (
    <div>
      <button onClick={() => googleLogin()}>SignUp with Google</button>
      <button onClick={() => facebookLogin()}>SignUp with Facebook</button>
    </div>
  );
}

export default SignUp;

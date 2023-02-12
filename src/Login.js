import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import "./Login.css";
import { login } from "./features/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            displayName: userAuth.user.displayName,
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            photoUrl: userAuth.photoURL,
          })
        );
      }).catch(error=>alert(error));
  };
  const register = () => {
    if (!name) {
      return alert("Please enter a Full Name");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoUrl: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="login">
      <img
        src="data:image/png;base64,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"
        alt=""
      />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Full Name(required if registering)"
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          type="text"
          placeholder="Profile picture URL (optional)"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button type="submit" onClick={loginToApp}>
          {" "}
          Sign In
        </button>
      </form>

      <p>
        Not a member?
        <span className="login_register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;

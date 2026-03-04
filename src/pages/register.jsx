import React, { useState } from "react";
import { auth, storage, db } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErr(false);

    const displayName = e.target.displayName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const file =
      e.target.file && e.target.file.files ? e.target.file.files[0] : null;

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      let photoURL = "";

      if (file) {
        const storageRef = ref(
          storage,
          `avatars/${res.user.uid}_${Date.now()}`,
        );
        const uploadTask = uploadBytesResumable(storageRef, file);

        await new Promise((resolve, reject) => {
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              // progress monitoring could go here
            },
            (error) => {
              setErr(true);
              reject(error);
            },
            async () => {
              try {
                photoURL = await getDownloadURL(uploadTask.snapshot.ref);
                await updateProfile(res.user, {
                  displayName,
                  photoURL: photoURL,
                });
                resolve();
              } catch (err) {
                setErr(true);
                reject(err);
              }
            },
          );
        });
      } else {
        await updateProfile(res.user, { displayName });
      }

      // Create user document in Firestore
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        name: displayName,
        email: email,
        photoURL: photoURL,
      });

      await setDoc(doc(db, "userchats", res.user.uid), {});
      navigate("/");
    } catch (err) {
      console.error("Registration error:", err);
      setErr(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Nexus Chat</span>
        <span className="title">Register</span>
        <form id="nameid" onSubmit={handleSubmit}>
          <input
            name="displayName"
            type="text"
            placeholder="display name"
            required
          />
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="email"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="password"
            required
          />
          <input
            name="file"
            style={{ display: "none" }}
            type="file"
            id="file"
          />
          <label htmlFor="file">
            <img
              src="https://th.bing.com/th/id/OIP.II1WCfGiwrgzr0_2g_3yHAHaHa?w=172&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
              alt=""
            />
            <span>Add an avatar</span>
          </label>
          <button disabled={loading}>
            {loading ? "Creating account..." : "Sign Up"}
          </button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          You do have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

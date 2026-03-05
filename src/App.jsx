import React, { useContext } from "react";
import Register from "./pages/register";
import Login from "./pages/login";
import Home from "./pages/home";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter basename="/NexusChat">
      <Routes>
        <Route
          path="/"
          element={currentUser ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="register"
          element={currentUser ? <Navigate to="/" /> : <Register />}
        />
        <Route
          path="login"
          element={currentUser ? <Navigate to="/" /> : <Login />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

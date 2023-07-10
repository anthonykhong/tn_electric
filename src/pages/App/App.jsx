import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import Home from "../Home/Home";
import Auth from "../Auth/Auth";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

import "./App.css";

export default function App() {
  const [user, setUser] = useState(getUser());

  function updateUser(userState) {
    setUser(userState);
  }

  return (
    <main>
      {user ? (
        <>
          <NavBar updateUser={updateUser} />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <hr />
          <Footer />
        </>
      ) : (
        <Auth setUser={setUser} />
      )}
    </main>
  );
}

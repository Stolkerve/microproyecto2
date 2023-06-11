import { Navigate, Route, Routes } from "react-router-dom";
import Landing from "./views/Landing";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Profile from "./views/Profile";
import Movie from "./views/Movie";
import Admin from "./views/Admin";
import { useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "./firebase/client";
import { useGlobalState } from "./globalState";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [user, setUser] = useGlobalState("user");
  const [loadingAuth, setLoadingAuth] = useState(true);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (u) => {
      setUser(u);
      setLoadingAuth(false);
    });
  }, []);

  return (
    <div>
      {loadingAuth ? (
        <></>
      ) : (
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/movie" element={<Movie />} />
            {/* { user ? <PrivateRoutes /> : <Navigate to={"/"} /> } */}

            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
          <Footer />
        </div>
      )}
    </div>
  );
}

function PrivateRoutes() {
  return (
    <>
      <Route path="/profile" element={<Profile />} />
      <Route path="/admin" element={<Admin />} />
    </>
  );
}

export default App;
import Feed from "./Feed/Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Login from "./Login";
import "./app.css";
import Widgets from "./Widget";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log("User", user);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  // Bem naming convention
  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          {/* Body */}
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </div>
      )}
    </>
  );
}

export default App;

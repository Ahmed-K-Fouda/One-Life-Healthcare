import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

// Create AuthContext
const AuthContext = createContext();

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <About />,
        path: "about",
      },
      {
        element: <Contact />,
        path: "contact",
      },
      {
        element: <SignUp />,
        path: "signup",
      },
      {
        element: <Login />,
        path: "login",
      },
    ],
  },
]);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setIsAuthenticated(true);
    }
  }, []);

  const setAuth = (auth) => {
    setIsAuthenticated(auth);
    if (auth) {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      setUser(storedUser);
    } else {
      setUser(null);
      localStorage.removeItem("user");
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, setAuth }}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}

export { AuthContext };
export default App;

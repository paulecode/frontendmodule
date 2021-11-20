import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectRoute({children}) {

  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState();

  useEffect(() => {
    try {
      const user = localStorage.getItem("user");
      setIsAuthenticated(user != null);
    } catch (e) {
      setIsAuthenticated(false);
    }
  }, []);


  return isAuthenticated ? (
      children
  ) : (
    <>
    {navigate('/')}
    </>
  );
}

export default ProtectRoute;

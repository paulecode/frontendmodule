import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectRoute(ChildComponent) {

  //const navigate = useNavigate();

  useEffect(() => {
    try {
      const user = localStorage.getItem("user");
      setIsAuthenticated(user != null);
    } catch (e) {
      setIsAuthenticated(false);
    }
  }, []);
  const [isAuthenticated, setIsAuthenticated] = useState();

//   return isAuthenticated ? (
//     <ChildComponent />
//   ) : (
//     <>
//     {navigate('/')}
//     </>
//   );
  return (<h1>Hellow</h1>);
}

export default ProtectRoute;

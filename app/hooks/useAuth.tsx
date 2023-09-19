import React from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [localStorage.getItem("token")]);

  return isAuthenticated;
};

export default useAuth;

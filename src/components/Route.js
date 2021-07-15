import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
    const OnLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", OnLocationChange);

    return () => {
      window.removeEventListener("popstate", onlanguagechange);
    };
  }, []);

  return currentPath === path ? children : null;
};

export default Route;

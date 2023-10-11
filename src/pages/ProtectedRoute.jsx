import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import { useEffect } from "react";

//This component is to make sure that the user cannot access any of the routes without being logged in and if they happen to find themselves on one it will be redirected to the homepag
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  return isAuthenticated ? children : null;
}
//we will need to wrap either our whole application or parts of it in this. so in this case it is in App.jsx
export default ProtectedRoute;

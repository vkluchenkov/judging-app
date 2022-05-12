import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { GuardedRouteProps } from "./types";

export const GuardedRoute: React.FC<GuardedRouteProps> = ({ children }) => {
  const currentUser = useContext(UserContext);
  return currentUser.isLoggedIn ? children : <Navigate to='/login' />
}
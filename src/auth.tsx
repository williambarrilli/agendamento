import { getAuth } from "firebase/auth";
import { Navigate, useLocation } from "react-router-dom";

export function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = getAuth();
  let location = useLocation();

  if (!auth.currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

import { useAuthentication } from "../state/AuthenticationContext";
import { Redirect, Route } from "react-router-dom";

// @ts-ignore
export default function UnauthenticatedRoute({ component: C, ...props }) {
  const { isAuthenticated } = useAuthentication();
  return (
    <Route
      {...props}
      render={(routeProps) =>
        !isAuthenticated ? <C {...routeProps} /> : <Redirect to="/browse" />
      }
    />
  );
}

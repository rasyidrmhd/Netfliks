import { Route, Redirect } from "react-router-dom";

export default function PrivateLogin({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem("access_token") ? (
          <Redirect
            to={{
              pathname: "/home",
              state: { from: location },
            }}
          />
        ) : (
          children
        )
      }
    />
  );
}

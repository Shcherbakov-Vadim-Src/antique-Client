import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {
    console.log('protected');
  let token  = localStorage.getItem('antiqueToken');

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        token ? <Component {...props} /> : <Redirect to="/auth" />
      }
    />
  );
}

export default ProtectedRoute;
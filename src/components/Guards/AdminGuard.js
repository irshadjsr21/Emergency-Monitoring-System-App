import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { isAdminLoggedIn } from '../../services/auth';

export const AdminGuard = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAdminLoggedIn() === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/admin/login', state: { from: props.location } }}
        />
      )
    }
  />
);

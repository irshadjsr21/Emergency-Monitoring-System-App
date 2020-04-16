import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { isAmbulanceLoggedIn } from '../../services/auth';

export const AmbulanceGuard = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAmbulanceLoggedIn() === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/admin/login', state: { from: props.location } }}
        />
      )
    }
  />
);

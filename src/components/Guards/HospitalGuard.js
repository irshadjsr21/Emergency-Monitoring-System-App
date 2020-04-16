import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { isHospitalLoggedIn } from '../../services/auth';

export const HospitalGuard = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isHospitalLoggedIn() === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/admin/login', state: { from: props.location } }}
        />
      )
    }
  />
);

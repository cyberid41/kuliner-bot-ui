/* eslint-disable */
import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { routerActions } from 'react-router-redux';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import {
  App,
  NotFound,
  Home,
} from 'containers';
import getRoutesUtils from 'utils/routes';

// eslint-disable-next-line import/no-dynamic-require
if (typeof System.import === 'undefined') System.import = module => Promise.resolve(require(module));

export default store => {
  const {
    injectReducerAndRender,
    permissionsComponent
  } = getRoutesUtils(store);

  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      {/* Home (main) route */}
      <IndexRoute component={Home} onEnter={() => {
        console.log('=== onEnter Home ===');
      }} />
      <Route path="404" component={NotFound} status={404} />
    </Route>
  );
};
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Login from './Login';
import AuthLayout from "../../components/Layout/AuthLayout";

const title = 'XYZ';

function action() {
  return {
    chunks: ['XXX'],
    title,
    component: (
      <AuthLayout>
        <Login/>
      </AuthLayout>
    ),
  };
}

export default action;

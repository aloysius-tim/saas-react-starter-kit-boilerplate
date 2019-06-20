/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import NotFound from './NotFound';
import AuthLayout from "../../../components/Layout/AuthLayout";

const title = 'Page Not Found';

function action() {
  return {
    chunks: ['not-found'],
    title,
    component: (
      <AuthLayout>
        <NotFound title={title} />
      </AuthLayout>
    ),
    status: 404,
  };
}

export default action;

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Register from './Register';
import AuthPageLayout from "../../../components/Layout/AuthPageLayout";

const title = 'New User Registration';

function action(context) {
  return {
    chunks: ['auth'],
    title,
    component: (
      <AuthPageLayout context={context} title={title}>
        <Register/>
      </AuthPageLayout>
      ),
  };
}

export default action;

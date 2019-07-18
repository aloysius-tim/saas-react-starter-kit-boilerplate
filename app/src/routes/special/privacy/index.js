/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Privacy from './Privacy';
import Layout from '../../../components/Layout/Layout';

function action() {
  return {
    title: 'Privacy policy',
    component: (
      <Layout>
        <Privacy />
      </Layout>
    ),
  };
}

export default action;

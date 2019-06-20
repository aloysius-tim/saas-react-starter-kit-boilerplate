/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import AdminLayout from "../../../components/Layout/AdminLayout";
import Dashboard from "./Dashboard";

async function action({ fetch }) {
  return {
    title: 'React Starter Kit',
    chunks: ['dashboard'],
    component: (
      <AdminLayout>
        <Dashboard/>
      </AdminLayout>
    ),
  };
}

export default action;

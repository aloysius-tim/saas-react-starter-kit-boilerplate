/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Admin from "./Admin";
import AdminLayout from "../../components/Layout/AdminLayout";

function action(context) {
  return {
    title: 'Admin',
    chunks: ['admin'],
    component: <AdminLayout context={context}><Admin/></AdminLayout>,
  };
}

export default action;

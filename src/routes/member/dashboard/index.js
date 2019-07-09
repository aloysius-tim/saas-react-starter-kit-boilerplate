/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import MemberLayout from "../../../components/Layout/MemberLayout";
import Dashboard from "./Dashboard";

async function action(context) {
  return {
    title: 'React Starter Kit',
    chunks: ['member'],
    component: (
      <MemberLayout context={context} sidenav={true}>
        <Dashboard/>
      </MemberLayout>
    ),
  };
}

export default action;

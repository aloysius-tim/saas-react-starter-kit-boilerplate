/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import MemberLayout from "../../../../components/Layout/MemberLayout";
import Profile from "./Profile";

const title = 'User profile';

function action(context) {
  return {
    chunks: ['member'],
    title,
    component: (
      <MemberLayout context={context} sidenav={true} title={'Profile'}>
        <Profile/>
      </MemberLayout>
    ),
  };
}

export default action;

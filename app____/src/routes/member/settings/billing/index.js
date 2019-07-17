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
import Billing from "./Billing";

const title = 'User billing';

function action(context) {
  return {
    chunks: ['member'],
    title,
    component: (
      <MemberLayout context={context} sidenav={true} title={'Billing'}>
        <Billing/>
      </MemberLayout>
    ),
  };
}

export default action;

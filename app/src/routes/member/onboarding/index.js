/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Onboarding from './Onboarding';
import MemberLayout from '../../../components/Layout/MemberLayout';

async function action(context) {
  return {
    title: 'React Starter Kit',
    chunks: ['member'],
    component: (
      <MemberLayout context={context} sidenav={false} title="Onboarding">
        <Onboarding context={context} />
      </MemberLayout>
    ),
  };
}

export default action;

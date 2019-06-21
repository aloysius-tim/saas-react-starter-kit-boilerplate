/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Onboarding from "./Onboarding";
import OnboardingLayout from "../../../components/Layout/OnboardingLayout";

async function action({ fetch }) {
  return {
    title: 'React Starter Kit',
    chunks: ['member'],
    component: (
      <OnboardingLayout>
        <Onboarding/>
      </OnboardingLayout>
    ),
  };
}

export default action;

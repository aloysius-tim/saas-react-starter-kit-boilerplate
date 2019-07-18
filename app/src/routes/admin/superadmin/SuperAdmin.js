/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

class SuperAdmin extends React.Component {
  render() {
    return <div>Super Admin</div>;
  }
}

export { SuperAdmin as ErrorPageWithoutStyle };
export default withStyles(s)(SuperAdmin);

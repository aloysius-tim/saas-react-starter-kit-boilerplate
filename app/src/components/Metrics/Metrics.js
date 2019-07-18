/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';

class Metrics extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-xl-3 col-lg-6">
          <div className="card card-stats mb-4 mb-xl-0">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <h5 className="card-title text-uppercase text-muted mb-0">
                    Traffic
                  </h5>
                  <span className="h2 font-weight-bold mb-0">350,897</span>
                </div>
                <div className="col-auto">
                  <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                    <i className="fas fa-chart-bar" />
                  </div>
                </div>
              </div>
              <p className="mt-3 mb-0 text-muted text-sm">
                <span className="text-success mr-2">
                  <i className="fa fa-arrow-up" /> 3.48%
                </span>
                <span className="text-nowrap">Since last month</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6">
          <div className="card card-stats mb-4 mb-xl-0">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <h5 className="card-title text-uppercase text-muted mb-0">
                    New users
                  </h5>
                  <span className="h2 font-weight-bold mb-0">2,356</span>
                </div>
                <div className="col-auto">
                  <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                    <i className="fas fa-chart-pie" />
                  </div>
                </div>
              </div>
              <p className="mt-3 mb-0 text-muted text-sm">
                <span className="text-danger mr-2">
                  <i className="fas fa-arrow-down" /> 3.48%
                </span>
                <span className="text-nowrap">Since last week</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6">
          <div className="card card-stats mb-4 mb-xl-0">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <h5 className="card-title text-uppercase text-muted mb-0">
                    Sales
                  </h5>
                  <span className="h2 font-weight-bold mb-0">924</span>
                </div>
                <div className="col-auto">
                  <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                    <i className="fas fa-users" />
                  </div>
                </div>
              </div>
              <p className="mt-3 mb-0 text-muted text-sm">
                <span className="text-warning mr-2">
                  <i className="fas fa-arrow-down" /> 1.10%
                </span>
                <span className="text-nowrap">Since yesterday</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6">
          <div className="card card-stats mb-4 mb-xl-0">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <h5 className="card-title text-uppercase text-muted mb-0">
                    Performance
                  </h5>
                  <span className="h2 font-weight-bold mb-0">49,65%</span>
                </div>
                <div className="col-auto">
                  <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                    <i className="fas fa-percent" />
                  </div>
                </div>
              </div>
              <p className="mt-3 mb-0 text-muted text-sm">
                <span className="text-success mr-2">
                  <i className="fas fa-arrow-up" /> 12%
                </span>
                <span className="text-nowrap">Since last month</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Metrics;

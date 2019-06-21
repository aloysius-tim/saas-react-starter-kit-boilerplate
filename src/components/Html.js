/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import serialize from 'serialize-javascript';
import config from '../config';

/* eslint-disable react/no-danger */

class Html extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    styles: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        cssText: PropTypes.string.isRequired,
      }).isRequired,
    ),
    scripts: PropTypes.arrayOf(PropTypes.string.isRequired),
    app: PropTypes.object, // eslint-disable-line
    children: PropTypes.string.isRequired,
  };

  static defaultProps = {
    styles: [],
    scripts: [],
  };

  render() {
    const { title, description, styles, scripts, app, children } = this.props;
    return (
      <html className="no-js" lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {scripts.map(script => (
          <link key={script} rel="preload" href={script} as="script" />
        ))}
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        {styles.map(style => (
          <style
            key={style.id}
            id={style.id}
            dangerouslySetInnerHTML={{ __html: style.cssText }}
          />
        ))}

        <link href="https://diegoddox.github.io/react-redux-toastr/7.1/react-redux-toastr.min.css" rel="stylesheet" type="text/css"/>
        <link href={'https://cdnjs.cloudflare.com/ajax/libs/antd/3.19.0/antd.css'} rel={'stylesheet'}/>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
        {/* Icons */}
        <link href="/assets/vendor/nucleo/css/nucleo.css" rel="stylesheet" />
        <link href="/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" rel="stylesheet" />
        {/* Argon CSS */}
        <link type="text/css" href="/assets/css/argon.css" rel="stylesheet" />
        <script id="stripe-js" src="https://js.stripe.com/v3/" async></script>
      </head>
      <body className={'bg-default'}>
      <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
      <script
        dangerouslySetInnerHTML={{ __html: `window.App=${serialize(app)}` }}
      />
      {scripts.map(script => <script key={script} src={script} />)}
      {config.analytics.googleTrackingId && (
        <script
          dangerouslySetInnerHTML={{
            __html:
            'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' +
            `ga('create','${
              config.analytics.googleTrackingId
              }','auto');ga('send','pageview')`,
          }}
        />
      )}
      {config.analytics.googleTrackingId && (
        <script
          src="https://www.google-analytics.com/analytics.js"
          async
          defer
        />
      )}

      <script src="/assets/vendor/jquery/dist/jquery.min.js"></script>
      <script src="/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
      <script src="/assets/vendor/chart.js/dist/Chart.min.js"></script>
      <script src="/assets/vendor/chart.js/dist/Chart.extension.js"></script>
      <script src="/assets/js/argon.js?v=1.0.0"></script>
      </body>
      </html>
    );
  }
}

export default Html;

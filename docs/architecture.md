# Arborescence

```bash
├── api
│   ├── AUTH.md
│   ├── README.md
│   ├── ace
│   ├── app
│   │   ├── Controllers
│   │   │   └── Http
│   │   │       ├── AuthController.js
│   │   │       ├── LogController.js
│   │   │       ├── PaymentController.js
│   │   │       ├── ProfileController.js
│   │   │       ├── StripeWebHookController.js
│   │   │       └── UserController.js
│   │   ├── Helpers
│   │   │   ├── Logger.js
│   │   │   └── Utils.js
│   │   ├── Middleware
│   │   │   ├── JwtAuth.js
│   │   │   ├── JwtAuthAdmin.js
│   │   │   ├── JwtAuthManager.js
│   │   │   ├── JwtAuthMember.js
│   │   │   ├── JwtAuthModerator.js
│   │   │   ├── JwtAuthSuperAdmin.js
│   │   │   └── JwtAuthVerified.js
│   │   ├── Models
│   │   │   ├── Hooks
│   │   │   │   ├── ProfileHook.js
│   │   │   │   └── UserHook.js
│   │   │   ├── Log.js
│   │   │   ├── Profile.js
│   │   │   ├── Subscription.js
│   │   │   ├── Token.js
│   │   │   └── User.js
│   │   ├── Routes
│   │   │   ├── Auth.js
│   │   │   ├── Logs.js
│   │   │   ├── Payment.js
│   │   │   ├── Profile.js
│   │   │   ├── StripeWebHook.js
│   │   │   └── User.js
│   │   └── Validators
│   │       ├── auth
│   │       │   ├── AssignRole.js
│   │       │   ├── Authorise.js
│   │       │   ├── ForgotPassword.js
│   │       │   ├── RefreshToken.js
│   │       │   ├── ResetPassword.js
│   │       │   ├── Signup.js
│   │       │   ├── UpdateEmail.js
│   │       │   └── UpdatePassword.js
│   │       ├── payment
│   │       │   └── subscribePlan.js
│   │       └── profile
│   │           ├── UpdateAvatar.js
│   │           └── UpdateProfile.js
│   ├── config
│   │   ├── app.js
│   │   ├── auth.js
│   │   ├── bodyParser.js
│   │   ├── cloudinary.js
│   │   ├── cors.js
│   │   ├── database.js
│   │   ├── mail.js
│   │   └── services.js
│   ├── database
│   │   ├── factory.js
│   │   └── migrations
│   │       ├── 1503747047954_user.js
│   │       ├── 1503747047956_token.js
│   │       ├── 1525087185130_log_schema.js
│   │       └── 1525778327511_profile_schema.js
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   ├── app
│   │   │   ├── service-worker.js
│   │   │   └── static
│   │   │       ├── img
│   │   │       │   └── icons
│   │   │       │       ├── android-chrome-192x192.png
│   │   │       │       ├── android-chrome-512x512.png
│   │   │       │       ├── apple-touch-icon-120x120.png
│   │   │       │       ├── apple-touch-icon-152x152.png
│   │   │       │       ├── apple-touch-icon-180x180.png
│   │   │       │       ├── apple-touch-icon-60x60.png
│   │   │       │       ├── apple-touch-icon-76x76.png
│   │   │       │       ├── apple-touch-icon.png
│   │   │       │       ├── favicon-16x16.png
│   │   │       │       ├── favicon-32x32.png
│   │   │       │       ├── favicon.ico
│   │   │       │       ├── msapplication-icon-144x144.png
│   │   │       │       ├── mstile-150x150.png
│   │   │       │       └── safari-pinned-tab.svg
│   │   │       └── manifest.json
│   │   └── images
│   │       ├── avatars
│   │       ├── logo.png
│   │       ├── logo_blue.png
│   │       └── logo_white.png
│   ├── saastr.paw
│   ├── server.js
│   ├── start
│   │   ├── app.js
│   │   ├── hooks.js
│   │   ├── kernel.js
│   │   └── routes.js
│   ├── tmp
│   │   └── saastr.log
│   └── yarn.lock
├── app
│   ├── CHANGELOG.md
│   ├── CONTRIBUTING.md
│   ├── Dockerfile
│   ├── LICENSE.txt
│   ├── README.md
│   ├── docs
│   │   ├── README.md
│   │   ├── data-fetching.md
│   │   ├── getting-started.md
│   │   ├── how-to-configure-text-editors.md
│   │   ├── react-style-guide.md
│   │   ├── recipes
│   │   │   ├── how-to-configure-facebook-login.md
│   │   │   ├── how-to-implement-routing.md
│   │   │   ├── how-to-integrate-disqus.md
│   │   │   ├── how-to-integrate-react-intl.md
│   │   │   ├── how-to-integrate-redux.md
│   │   │   ├── how-to-use-sass.md
│   │   │   └── using-npm-and-webpack-as-a-build-tool.md
│   │   └── testing-your-application.md
│   ├── jest.config.js
│   ├── package.json
│   ├── production.sh
│   ├── public
│   │   ├── browserconfig.xml
│   │   ├── crossdomain.xml
│   │   ├── favicon.ico
│   │   ├── humans.txt
│   │   ├── icon.png
│   │   ├── robots.txt
│   │   ├── site.webmanifest
│   │   ├── tile-wide.png
│   │   └── tile.png
│   ├── src
│   │   ├── DOMUtils.js
│   │   ├── actions
│   │   │   ├── README.md
│   │   │   ├── authActions.js
│   │   │   ├── paymentActions.js
│   │   │   ├── runtime.js
│   │   │   └── userActions.js
│   │   ├── client.js
│   │   ├── components
│   │   │   ├── App.js
│   │   │   ├── Html.js
│   │   │   ├── Layout
│   │   │   │   ├── AdminLayout.js
│   │   │   │   ├── AuthPageLayout.js
│   │   │   │   ├── Card
│   │   │   │   │   ├── Card.css
│   │   │   │   │   ├── Card.js
│   │   │   │   │   └── package.json
│   │   │   │   ├── Footer
│   │   │   │   │   ├── Footer.css
│   │   │   │   │   ├── Footer.js
│   │   │   │   │   └── package.json
│   │   │   │   ├── Header
│   │   │   │   │   ├── Header.css
│   │   │   │   │   ├── Header.js
│   │   │   │   │   └── package.json
│   │   │   │   ├── Layout.js
│   │   │   │   ├── Layout.scss
│   │   │   │   ├── MemberLayout.js
│   │   │   │   ├── Navigation
│   │   │   │   │   ├── Navigation.css
│   │   │   │   │   ├── Navigation.js
│   │   │   │   │   ├── NavigationAuth.js
│   │   │   │   │   ├── UserAction.js
│   │   │   │   │   └── package.json
│   │   │   │   ├── Sidenav
│   │   │   │   │   ├── Sidenav.css
│   │   │   │   │   ├── Sidenav.js
│   │   │   │   │   └── package.json
│   │   │   │   └── package.json
│   │   │   ├── Link
│   │   │   │   ├── Link.js
│   │   │   │   └── package.json
│   │   │   ├── Metrics
│   │   │   │   ├── Metrics.js
│   │   │   │   └── package.json
│   │   │   ├── Page
│   │   │   │   ├── Page.css
│   │   │   │   ├── Page.js
│   │   │   │   └── package.json
│   │   │   ├── Pricing
│   │   │   │   ├── Plans.js
│   │   │   │   ├── Pricing.scss
│   │   │   │   └── package.json
│   │   │   └── variables.css
│   │   ├── config
│   │   │   ├── auth.js
│   │   │   ├── stripe.dev.js
│   │   │   ├── stripe.prod.js
│   │   │   └── stripe_export_plans.csv
│   │   ├── config.js
│   │   ├── constants
│   │   │   └── index.js
│   │   ├── createFetch.js
│   │   ├── history.js
│   │   ├── reducers
│   │   │   ├── authReducer.js
│   │   │   ├── index.js
│   │   │   ├── onboardingReducer.js
│   │   │   ├── paymentReducer.js
│   │   │   ├── runtime.js
│   │   │   ├── template.js
│   │   │   └── userReducer.js
│   │   ├── router.js
│   │   ├── routes
│   │   │   ├── admin
│   │   │   │   ├── Admin.js
│   │   │   │   ├── index.js
│   │   │   │   └── superadmin
│   │   │   │       ├── SuperAdmin.js
│   │   │   │       └── index.js
│   │   │   ├── auth
│   │   │   │   ├── login
│   │   │   │   │   ├── Login.js
│   │   │   │   │   ├── Login.scss
│   │   │   │   │   └── index.js
│   │   │   │   └── register
│   │   │   │       ├── Register.js
│   │   │   │       ├── Register.scss
│   │   │   │       └── index.js
│   │   │   ├── index.js
│   │   │   ├── member
│   │   │   │   ├── dashboard
│   │   │   │   │   ├── Dashboard.css
│   │   │   │   │   ├── Dashboard.js
│   │   │   │   │   └── index.js
│   │   │   │   ├── settings
│   │   │   │   │   └── billing
│   │   │   │   │       ├── Billing.css
│   │   │   │   │       ├── Billing.js
│   │   │   │   │       ├── NewCard.js
│   │   │   │   │       └── index.js
│   │   │   │   └── subscription
│   │   │   │       ├── Pay.js
│   │   │   │       ├── Subscription.css
│   │   │   │       ├── Subscription.js
│   │   │   │       └── index.js
│   │   │   └── special
│   │   │       ├── error
│   │   │       │   ├── ErrorPage.css
│   │   │       │   ├── ErrorPage.js
│   │   │       │   └── index.js
│   │   │       ├── legal
│   │   │       │   ├── Legal.js
│   │   │       │   └── index.js
│   │   │       ├── not-found
│   │   │       │   ├── NotFound.css
│   │   │       │   ├── NotFound.js
│   │   │       │   └── index.js
│   │   │       ├── privacy
│   │   │       │   ├── Privacy.js
│   │   │       │   └── index.js
│   │   │       ├── refund
│   │   │       │   ├── Refund.js
│   │   │       │   └── index.js
│   │   │       └── terms
│   │   │           ├── Terms.js
│   │   │           └── index.js
│   │   ├── saga
│   │   │   ├── authSaga.js
│   │   │   ├── index.js
│   │   │   ├── paymentSaga.js
│   │   │   └── userSaga.js
│   │   ├── server.js
│   │   ├── services
│   │   │   ├── AuthService.js
│   │   │   ├── StripeService.js
│   │   │   ├── UserService.js
│   │   │   └── template.js
│   │   └── store
│   │       ├── configureStore.js
│   │       ├── createHelpers.js
│   │       └── logger
│   │           ├── logger.client.js
│   │           ├── logger.server.js
│   │           └── package.json
│   ├── test
│   │   └── README.md
│   ├── tools
│   │   ├── README.md
│   │   ├── build.js
│   │   ├── bundle.js
│   │   ├── clean.js
│   │   ├── copy.js
│   │   ├── deploy.js
│   │   ├── fetch.js
│   │   ├── lib
│   │   │   ├── cp.js
│   │   │   ├── fileTransformer.js
│   │   │   ├── fs.js
│   │   │   ├── markdown-loader.js
│   │   │   ├── overrideRules.js
│   │   │   └── webpackHotDevClient.js
│   │   ├── postcss.config.js
│   │   ├── render.js
│   │   ├── request.js
│   │   ├── run.js
│   │   ├── runServer.js
│   │   ├── start.js
│   │   └── webpack.config.js
│   └── yarn.lock
└── docs
    ├── README.md
    ├── architecture.md
    └── index.html
```


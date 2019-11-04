# Build your own SaaS business with our SaaS boilerplate.

> **SaaStr** is a SaaS boilerplate to kickstart your new SaaS adventure as fast as possible. Built on top of  [Adonis JS](https://github.com/adonisjs/adonis-framework) for the BackEnd and [React Starter Kit][https://github.com/kriasoft/react-starter-kit] for the Front-End it helped me to stay productive and follow the best practices. I hope it will be a solid starting point for both professionnals and beginners.
>
> - The boilerplate app comes with many basic SaaS features (see [Features](https://github.com/async-labs/saas#features) below) so that you are able to focus on features that differentiate your product.
> - I tried to be as generic as possible for all SaaS use case - Trial or not / Free plan or not / Social signup or not / ...
> - I built this boilerplate for myselve to focus more on what matters and to not spent weeks on the foundations of any SaaS product

**See** [getting started guide](https://github.com/kriasoft/react-starter-kit/blob/master/docs/getting-started.md), [demo](http://demo.reactstarterkit.com/), [docs](https://github.com/kriasoft/react-starter-kit/tree/master/docs), [roadmap](https://github.com/kriasoft/react-starter-kit/projects/1)

## Live demo:

- [https://saastr.0x0.run](https://saastr.0x0.run)

### Getting Started

- Follow the [getting started guide](https://github.com/kriasoft/react-starter-kit/blob/master/docs/getting-started.md) to download and run the project ([Node.js](https://nodejs.org/) >= 6.9)
- Check the [code recipes](https://github.com/kriasoft/react-starter-kit/blob/master/docs/recipes) used in this boilerplate, or share yours

### Features

- **JWT** authentification strategy
- **Local Authentication** using Email and Password
- **OAuth Authentification** via Facebook / Github / Google / Linkedin / Twitter / Instagram / Foursquare using [Adonis ALLY](https://github.com/adonisjs/adonis-ally)
- **Forgot password** / **Validate email address**
- **Stripe Subscription** with or without **trial**, **free plan**, **multiple subscriptions**
  - With trial or not
  - Optional Free plan
  - Multiple subscriptions
  - Subscribe / unsubscribe to a plan
  - Update card information
  - Add multiple cards
  - Verified Stripe webhook for failed payment for subscription.
  - Invoices
- **Subscription onboarding** to subscribe to a plan (yearly or monthly) / to downgrade / to upgrade
- **Mailing** for **trial ending**, **new account**, **trial ended**, **payment failed**, **on subscription**

## Built with

**Node / Adonis / React / Stripe / PostgreSQL / Docker / Redux / Argon Dashboard**

| Name                                                         | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [Adonis JS](https://github.com/adonisjs/adonis-framework)    | 🚀 The Node.js Framework highly focused on developer ergonomics, stability and confidence [https://adonisjs.com](https://adonisjs.com/) |
| [React starter kit](https://github.com/kriasoft/react-starter-kit) | React Starter Kit — isomorphic web app boilerplate (Node.js, Express, GraphQL, React.js, Babel, PostCSS, Webpack, Browsersync)[https://reactstarter.com](https://reactstarter.com/) |
| [Ally](https://github.com/adonisjs/adonis-ally)              | AdonisJs social authentication provider                      |
| [Adonis-JWT-api-starter](https://github.com/amitkhare/adonis-jwt-api-starter) | Boilerplate for creating a JWT API server in AdonisJs        |
| [Ant-design - ANTD](https://github.com/ant-design/ant-design) | An enterprise-class UI design language and React implementation. |
| [Adonis Lucid ORM](https://github.com/adonisjs/adonis-lucid) | 🗃 The ORM of AdonisJs Framework with support for PostgreSQL, MSSQL, MySQL, MariaDB, SQLite3, Oracle and Amazon Redshift |
| [PostgreSql](https://github.com/postgres/postgres)           | PostgreSQL is an advanced object-relational database management system |
| [Docker](https://github.com/docker/docker-ce)                | Docker enables developers and IT operations to build, secure and manage applications without technology or infrastructure lock in. |
| [Stripe Elements](https://github.com/stripe/react-stripe-elements) | React components for Stripe.js and Stripe Elements https://stripe.com/elements |
| [Stripe](https://github.com/stripe/stripe-node)              | Node.js library for the Stripe API. [https://stripe.com](https://stripe.com/) |
| [Argon dashboard UI template](https://github.com/creativetimofficial/argon-dashboard) | Argon - Dashboard for Bootstrap 4 by Creative Tim [https://www.creative-tim.com/product/…](https://www.creative-tim.com/product/argon-dashboard) |

For more detail, check `package.json` files in both `app` and `api` folders and project's root.

#Getting Started

This guide will offer you a quick start to setup the boilerplate. We will setup the project in 2 parts: FRONT-END then BACK-END.

###0. GET THE LATEST VERSION
You can start by cloning the latest version of SaasTr on your local machine.

You can either fork or clone or follow this easy simple tutorial to fork a public repo private: [here](https://medium.com/@bilalbayasut/github-how-to-make-a-fork-of-public-repository-private-6ee8cacaf9d3)

###3. BACK-END

#####Requirements:
* NODE: Expected version "^6 || ^8.1 || >=10.*". (Indeed it's different than the frontend... Strange but couldn't find any other stripe librairies where front and back run with the same node v). You can easily use docker later (everything is already setup for smooth docker run) or use [N](https://github.com/tj/n) to switch between versions very easily.

#####Step by Step
- 1.1. Navigate in the `api` folder: `cd api`
- 1.2. Install dependencies: `yarn install`
- 1.3. Rename `/ROOT/api/.env.exemple` in `/ROOT/api/.env.dev` and `/ROOT/api/.env` (for prod) and setup the VARs you need. See comments in the file
    - Setup your database credentials (check adonis online documentation if needed. Many drivers supported)
    - Setup your Stripe KEYS + see others comments in the file
- 1.4. Activate the webhooks on Stripe (https://dashboard.stripe.com/XXX/webhooks) !
    - The endpoint to receive the webhooks is: (http://domain.com/api/stripe/webhook)
    - You cannot use localhost on Stripe to receive the hooks. In dev mode, you can launch `yarn startWebhookTunnel` that will create a tunnel with ultrahook
    - You need to activate the followings hooks:
        - customer.subscription.updated
        - customer.subscription.created
        - invoice.payment_succeeded
        - invoice.payment_failed
        - customer.subscription.trial_will_end
        - customer.source.created
- 1.5. Run database migration `ENV_PATH=.env.dev adonis migration:run`
- 1.6. Launch Backend ! `yarn start`

###2. FRONT-END

#####Requirements:
* NODE: Expected version ">=4 <=9". (Indeed it's different than the backend... Strange but couldn't find any other stripe librairies where front and back run with the same node v). You can easily use docker later (everything is already setup for smooth docker run) or use [N](https://github.com/tj/n) to switch between versions very easily.

#####Step by Step
- 2.1. Navigate in the `app` folder: `cd app`
- 2.2. Install dependencies: `yarn install`
- 2.3. Update `/ROOT/app/src/config.js` if needed to check the env VARs. For dev purpose, you shouldn't need to change anything in the conf. Be sure to update the API endpoint for prod?
- 2.4. Update `/ROOT/app/src/config/auth.js` to setup the AUTHENTIFICATION providers you will support (the endpoints are generic and you will just need to setup en env KEYS of the differents providers in the backend)
- 2.5. Update `/ROOT/app/src/config/stripe.XXX.js` to setup the PRICING PLANS you will offer to users.
    - Setup the pk_live and pk_test that you will find when you setup your Stripe Account.
    - if yearly true, you offer yearly plans to users. Meaning you need for a single PLAN to define it on Stripe twice (for yearly and monthly) and below twice too. Exemple: GOLD_PLAN_YEARLY & GOLD_PLAN_MONTHLY
    - You can setup a FREE plan (only if you want..) ! Be sure you defined it as a 0€ PLAN on Stripe (Yes even if it's free)
    - Check comments in stripe.dev.js
- 2.6. Launch `Yarn start` to launch front server !
    

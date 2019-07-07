'use strict'

/*
|--------------------------------------------------------------------------
| Services Configuration
|--------------------------------------------------------------------------
|
| This is general purpose file to define configuration for multiple services.
| The below config is for the ally provider. Make sure to save it inside
| config/services.js file.
|
| Happy Coding :)
|
*/

const Env = use('Env');

module.exports = {
  ally: {
    /*
    |--------------------------------------------------------------------------
    | Facebook Configuration
    |--------------------------------------------------------------------------
    |
    | You can access your application credentials from the facebook developers
    | console. https://developers.facebook.com/apps
    |
    */
    facebook: {
      clientId: Env.get('FACEBOOK_CLIENT_ID'),
      clientSecret: Env.get('FACEBOOK_CLIENT_SECRET'),
      redirectUri: `${Env.get('API_URL')}/api/auth/authenticated/facebook`
    },

    /*
    |--------------------------------------------------------------------------
    | Google Configuration
    |--------------------------------------------------------------------------
    |
    | You can access your application credentials from the google developers
    | console. https://console.developers.google.com
    |
    */
    google: {
      clientId: Env.get('GOOGLE_CLIENT_ID'),
      clientSecret: Env.get('GOOGLE_CLIENT_SECRET'),
      redirectUri: `${Env.get('API_URL')}/api/auth/authenticated/google`
    },

    /*
    |--------------------------------------------------------------------------
    | Github Configuration
    |--------------------------------------------------------------------------
    |
    | You can access your application credentials from the github developers
    | console. https://github.com/settings/developers
    |
    */
    github: {
      clientId: Env.get('GITHUB_CLIENT_ID'),
      clientSecret: Env.get('GITHUB_CLIENT_SECRET'),
      redirectUri: `${Env.get('API_URL')}/api/auth/authenticated/github`
    },

    /*
     |--------------------------------------------------------------------------
     | Instagram Configuration
     |--------------------------------------------------------------------------
     |
     | You can access your application credentials from the instagram developers
     | console. https://www.instagram.com/developer/
     |
     */
    instagram: {
      clientId: Env.get('INSTAGRAM_CLIENT_ID'),
      clientSecret: Env.get('INSTAGRAM_CLIENT_SECRET'),
      redirectUri: `${Env.get('API_URL')}/api/auth/authenticated/instagram`
    },

    /*
     |--------------------------------------------------------------------------
     | Foursquare Configuration
     |--------------------------------------------------------------------------
     |
     | You can access your application credentials from the Foursquare developers
     | console. https://developer.foursquare.com/
     |
     */
    foursquare: {
      clientId: Env.get('FOURSQUARE_ID'),
      clientSecret: Env.get('FOURSQUARE_SECRET'),
      redirectUri: `${Env.get('API_URL')}/api/auth/authenticated/foursquare`
    },

    linkedin: {
      clientId: Env.get('LINKEDIN_ID'),
      clientSecret: Env.get('LINKEDIN_SECRET'),
      redirectUri: `${Env.get('API_URL')}/api/auth/authenticated/linkedin`
    },

    twitter: {
      clientId: Env.get('TWITTER_ID'),
      clientSecret: Env.get('TWITTER_SECRET'),
      redirectUri: `${Env.get('API_URL')}/api/auth/authenticated/twitter`
    }
  }
};

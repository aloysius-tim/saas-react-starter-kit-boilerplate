'use strict';

const uuid = use('uuid/v1');
const Hash = use('Hash');
const Env = use('Env');

// eslint-disable-next-line no-multi-assign
const UserHook = module.exports = {};

UserHook.hashPassword = async userInstance => {
  if (userInstance.password) {
    userInstance.password = await Hash.make(userInstance.password);
  }
};


UserHook.createProfile = async userInstance => {
  await userInstance.profile().create({});
};

UserHook.setDefaults = async userInstance => {
  userInstance.uid = Math.random().toString(18).substr(2, 8);

  if (Env.get('APP_SUPERADMIN_EMAIL', null) != null && userInstance.email === Env.get('APP_SUPERADMIN_EMAIL')) {
    userInstance.role = 'superadmin';
  } else {
    userInstance.role = 'member';
  }
  userInstance.banned = false;
  userInstance.provider = userInstance.provider || 'local';
  userInstance.confirmation_token = (userInstance.provider === 'local' ? (Env.get('APP_SUPERADMIN_EMAIL', null) !== null && userInstance.email === Env.get('APP_SUPERADMIN_EMAIL')) ? null : uuid() : null);
  userInstance.verified = (userInstance.provider === 'local' ? !!((Env.get('APP_SUPERADMIN_EMAIL', null) !== null && userInstance.email === Env.get('APP_SUPERADMIN_EMAIL'))) : true);
};

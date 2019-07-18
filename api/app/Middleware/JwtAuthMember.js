'use strict';

class JwtAuthManager {
  // eslint-disable-next-line consistent-return
  async handle ({ response, auth }, next) {
    // call next to advance the request
    try {
      const user = await auth.getUser();
      if (user.banned) {
        return response.status(403).json({ message: 'You are banned from this site.' });
      }

      if (user.confirmation_token !== null) {
        return response.status(403).json({ message: 'You need to verify your account before accessing this resource.' });
      }
      if (user.role !== 'member' && user.role !== 'manager' && user.role !== 'admin' && user.role !== 'superadmin') {
        return response.status(403).json({ message: 'You are not allowed to access this resource.' });
      }
    } catch (error) {
      return response.status(401).json({ message: 'Missing or invalid token' });
    }
    await next();
  }
}

module.exports = JwtAuthManager;

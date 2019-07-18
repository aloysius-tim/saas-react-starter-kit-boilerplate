'use strict';

class JwtAuthSuperAdmin {
  // eslint-disable-next-line consistent-return
  async handle ({ response, auth }, next) {
    // call next to advance the request
    try {
      const user = await auth.getUser();
      if (user.role !== 'superadmin') {
        return response.status(403).json({ message: 'You are not allowed to access this resource.' });
      }
    } catch (error) {
      return response.status(401).json({ message: 'Missing or invalid token' });
    }
    await next();
  }
}

module.exports = JwtAuthSuperAdmin;

'use strict';

const Log = use('App/Models/Log');
const logger = use('App/Helpers/Logger');

class LogController {
  async index ({ request, response }) {
    // eslint-disable-next-line max-len,no-restricted-globals,radix
    const page = (request.all().page && !isNaN(parseInt(request.all().page))) ? parseInt(request.all().page) : 1;

    let result = await Log.query().paginate(page);

    result = result.toJSON();

    result.data.map(el => {
      try {
        el.item = JSON.parse(el.description);
        el.description = 'Contains Object';
        // eslint-disable-next-line no-empty
      } catch (e) {}
      return el;
    });

    return response.status(200).json(result);
  }

  async clearAll ({ response, auth }) {
    await Log.truncate();

    await logger('info', 'Logs Cleared', auth.user.id, null, auth.user.email);

    return response.status(200).json({ message: 'All logs have been cleared.' });
  }
  async remove ({ request, response }) {
    const log = await Log.find(request.params.id);

    if (!log) {
      return response.status(404).json({ message: 'Log not found' });
    }
    await log.delete();

    return response.status(200).json({ message: `${log.name} was removed` });
  }
}

module.exports = LogController;

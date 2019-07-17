const Logger = async (level, event, user_id = null, row_id= null, description = null) => {
    const Log = use('App/Models/Log')
    const log = new Log()
    log.level = level.toUpperCase()
    log.event = event.toUpperCase()
    log.row_id = row_id
    log.user_id = user_id
    log.description = ((typeof description === "object") && (description !== null) ) ? JSON.stringify(description) : description
    await log.save() 
    return log;
}

module.exports = Logger
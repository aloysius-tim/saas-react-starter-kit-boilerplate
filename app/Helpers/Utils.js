
module.exports = {
    isValidJSON (text) {
        if (/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/bfnrtu]/g, '@').
            replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
            replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
        //the json is ok
        return true
        }else{
        //the json is not ok
        return false
        }
    },
    async makeLog (level, event, user_id = null, row_id= null, description = null) {
        const Log = use('App/Models/Log')
        const log = new Log()
        log.level = level.toUpperCase()
        log.event = event.toUpperCase()
        log.row_id = row_id
        log.user_id = user_id
        log.description = ((typeof description === "object") && (description !== null) ) ? JSON.stringify(description) : description
        await log.save() 
        return log;
    },
    
    padZero(num, size) {
        var s = num+"";
        while (s.length < size) s = "0" + s;
        return s;
    },
    
    arraySumProp(items, prop){
        return items.reduce( function(a, b){
            return a + b[prop];
        }, 0)
    }
}


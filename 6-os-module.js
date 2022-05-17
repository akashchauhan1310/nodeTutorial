const os = require('os')
const { uptime } = require('process')

//info about current user
const user = os.userInfo()

//method returns the system uptime in seconds
const upTime = os.uptime()

const currentOS = {
    name : os.type() ,
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}

console.log(currentOS)
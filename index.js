const fetch = require('node-fetch');


module.exports = {
    stats: async function() {
        const stats = await fetch('https://discord.riverside.rocks/stats.json.php').then((res => res.json()))
        return stats;
    },
    
    checkuser:  async function(id) {
     if (typeof userid !== 'string') throw new TypeError("User ID isn't valid");
      const usertocheck = await fetch(`https://discord.riverside.rocks/check.json.php?id=${id}`).then((res => res.json()))
     return usertocheck;
    },
    
    reportuser: async function (key, id, details) {
        if (typeof userid !== 'string') throw new TypeError("User ID isn't valid");
    
        const report = await fetch(`https://discord.riverside.rocks/report.json.php?key=${key}&id=${id}&details=${details}`).then((res => res.json()))
        return report;
    },
    
    deleteallreports: async function (key) {
     const datatodelete = await fetch(`https://discord.riverside.rocks/delete.json.php?key=${key}`)
     return datatodelete;
    }
}
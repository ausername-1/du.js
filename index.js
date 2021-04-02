const axios = require('axios');


module.exports = {
	stats: async function() {
		let stats = await axios.get('https://discord.riverside.rocks/stats.json.php')
		return stats.data;
	},

	checkuser:  async function(id) {
		if (typeof userid !== 'string') throw new TypeError("User ID isn't valid");
			let checkUser = await axios.get(`https://discord.riverside.rocks/check.json.php?id=${id}`)
         	return checkUser.data;
    },
	
	reportuser: async function (key, id, details) {
		if (typeof userid !== 'string') throw new TypeError("User ID isn't valid");
			let reportUser = await axios.get(`https://discord.riverside.rocks/report.json.php?key=${key}&id=${id}&details=${details}`)
			return reportUser.data;
    },
	
	deleteallreports: async function (key) {
		let dataToDelete await axios.get(`https://discord.riverside.rocks/delete.json.php?key=${key}`)
        return dataToDelete.data;
    }
}

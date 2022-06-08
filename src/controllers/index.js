getRaspberry = require("../services/getRaspberry");
module.exports = {
	get: async (req, res) => {
		await new getRaspberry(res, req).getData();
	},
};

const raspiInfo = require('raspberry-info');

class getRaspberry {
	constructor(res, req) {
		this.res = res;
		this.req = req;
	}
	async getData() {
		const data = {
			time: await raspiInfo.getCurrentTimeAndHost(),
			GPU: await raspiInfo.getGPUTemperature(),
			CPU: await raspiInfo.getCPUTemperature(),
			RAM: await raspiInfo.getMemoryUsage()
		}
		this.res.render('index', { data });

	}
}
module.exports = getRaspberry;

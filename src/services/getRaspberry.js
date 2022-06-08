const raspiInfo = require('../../node_modules/raspberry-info');

class getRaspberry {
	constructor(res, req) {
		this.res = res;
		this.req = req;
	}
	getData() {
		const data = {
			time: raspiInfo.getCurrentTimeAndHost().then(output => { return output; }),
			GPU: raspiInfo.getGPUTemperature().then(output => { return output; }),
			CPU: raspiInfo.getCPUTemperature().then(output => { return output; }),
			RAM: raspiInfo.getMemoryFree().then(output => { return output; })
		}
		/*const data = {
			time: 20,
			GPU: '23°C',
			CPU: '64°C',
			RAM: '300mb'
		}*/
		this.res.render('index', { data });

	}
}
module.exports = getRaspberry;

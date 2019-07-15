const MainController = require('./mainController');

module.exports = class AppController extends MainController {
    async index() {
        const { version, appName } = this.config;

        this.success({
            appName,
            version,
        });
    }
};

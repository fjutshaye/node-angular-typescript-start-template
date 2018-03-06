import * as express from 'express';
import * as path from 'path';

import { ApiRouter } from './routers/api';


class App {
    // ref to Express instance
    public express: express.Application;

    constructor() {
        this.express = express();
        this.setupMiddleWares();
        this.setupRoutes();
    }

    protected setupMiddleWares(): void {
        console.log('setting middle wares');
    }
    protected setupRoutes(): void {
        this.express.use('/api', new ApiRouter().router);
        this.express.use('/', express.static(path.join(__dirname, '../public')));
        this.express.get('*', (req, res) => { res.sendFile(path.join(__dirname, '../public/index.html')); });
        console.log('settting routers');
    }
}

export default new App().express;

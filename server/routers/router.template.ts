import * as express from 'express';

export abstract class RouterTemplate {
    constructor(){
        this.router = express.Router();
        this.setRouters();
    }
    public router: express.Router;
    protected abstract setRouters();
}
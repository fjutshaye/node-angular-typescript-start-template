import { RouterTemplate } from './router.template';

export class ApiRouter extends RouterTemplate {
    protected setRouters() {
        this.router.get('/', function(req, res) {
            console.log('API is working');
            res.send(`Hi ${req.ip}, API router is working.`);
        })
    }
}

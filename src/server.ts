import { Application, json, urlencoded } from "express";
import  helmet from 'helmet';
import Router from "./routes";

export default class Server{
    constructor(app: Application){
        this.config(app);
        new Router(app);
    }

    public config(app: Application): void{
        app.use(helmet());
        app.use(urlencoded({extended:true}));
        app.use(json());
    }
}
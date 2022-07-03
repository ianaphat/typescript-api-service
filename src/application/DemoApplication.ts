import Express, {Application} from "express";

class DemoApplication {

    private port:number;
    private appName:string;
    private app:Application = Express();

    constructor(appName:string, port:number) {
        this.appName = appName;
        this.port = port;
        this.setup();
    }

    private setup():void {
        this.app.get("/boom", (req, res) => {
            res.send("Hi there! : " + this.appName );
        });
    }
    public run():void {
        this.app.listen(this.port);
    }

}

export { DemoApplication };


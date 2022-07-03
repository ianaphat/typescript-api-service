import {DemoApplication} from "../application/DemoApplication";

const PORT:number = 3000;
let demoApplication:DemoApplication = new DemoApplication("Boomin", PORT);
demoApplication.run();


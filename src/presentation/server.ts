import { CheckServiceUseCases } from "../domain/use-cases/check/check-service.use-cases";
import { CronService } from "./cron/cron-service";


export class Server {

    public static start(){
        console.log("Server started...");
        

        
CronService.createJob("*/5 * * * * *", () => {
    console.log("Cron job executed at: ", new Date());
})

const url = "https://google.com";

const checkService = new CheckServiceUseCases(
    ()=> console.log(`servicio ok ${url}`) ,
                
    (error)=> console.log(`${error}`)
    
    )


checkService.execute(`${url}`)



    }

}
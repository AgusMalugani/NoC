import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";

interface ICheckServiceUseCases {

    execute(url: string): Promise<boolean>;
}
type SuccessCallback = () => void;
type ErrorCallback = (error: string) => void;

export class CheckServiceUseCases implements ICheckServiceUseCases {
    constructor(
        private readonly logRepository : LogRepository,
        private readonly successCallback: SuccessCallback,
        private readonly errorCallback:ErrorCallback
    ) { }


    public async execute(url: string): Promise<boolean> {

        try {
            const res = await fetch(url);
            if (!res.ok) { throw new Error(`Error check service url: ${url}`); }
            const log = new LogEntity({message:`Service ${url} is worker`,level:LogSeverityLevel.low, origin:"check-service.use-case.ts"});
            this.logRepository.saveLog(log)
            this.successCallback()
            return true;

        } catch (error) {
            const errorMessage = `${url} is not ok. ${error}`;
            const log = new LogEntity({message:errorMessage , level:LogSeverityLevel.high, origin:"check-service.use-case.ts"});
            this.logRepository.saveLog(log)
            
            this.errorCallback(errorMessage)
            return false;
        }


    }


}
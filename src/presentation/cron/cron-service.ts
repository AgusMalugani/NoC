import { CronJob } from "cron"

type cronTime = string | Date;
type onTick = () => void;

export class CronService {
    public static createJob(cronTime: cronTime, onTick: onTick) {
        const job = new CronJob(
            cronTime, // cronTime
            onTick, // onTick
            null, // onComplete
            true, // start
            'America/Los_Angeles' // timeZone
        );

        job.start();

        return job
    }
}
export enum LogSeverityLevel {
  low = "low",
  medium = "medium",
  high = "high",
}

export interface IOptions {
 level: LogSeverityLevel;
 message: string;
 createdAt?: Date;
 origin : string;

}

export class LogEntity {
  public level: LogSeverityLevel;
  public message: string;
  public createdAt: Date;
  public origin : string;

  constructor(options: IOptions) {
    const{level,message,origin,createdAt} = options;
    this.level = level;
    this.message = message;
    this.origin= origin;
    this.createdAt = createdAt ? createdAt : new Date()

  }

static fromJson(json:string):LogEntity{

  const {level,message,createdAt,origin} = JSON.parse(json);
  const newLog = new LogEntity({message,level,createdAt,origin})

  return newLog
}

}

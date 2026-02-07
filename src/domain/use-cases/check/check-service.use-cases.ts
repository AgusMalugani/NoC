
interface ICheckServiceUseCases {

    execute(url: string): Promise<boolean>;
}
type SuccessCallback = () => void;
type ErrorCallback = (error: string) => void;

export class CheckServiceUseCases implements ICheckServiceUseCases {
    constructor(
        private readonly successCallback: SuccessCallback,
        private readonly errorCallback:ErrorCallback
    ) { }


    public async execute(url: string): Promise<boolean> {

        try {
            const res = await fetch(url);
            if (!res.ok) { throw new Error(`Error check service url: ${url}`); }

            this.successCallback()
            return true;

        } catch (error) {
            this.errorCallback(`${error}`)
            return false;
        }


    }


}
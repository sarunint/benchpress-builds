import { WebDriverAdapter } from '../web_driver_adapter';
import { PerfLogEvent, PerfLogFeatures, WebDriverExtension } from '../web_driver_extension';
export declare class IOsDriverExtension extends WebDriverExtension {
    private _driver;
    static PROVIDERS: {
        provide: typeof IOsDriverExtension;
        deps: (typeof WebDriverAdapter)[];
    }[];
    constructor(_driver: WebDriverAdapter);
    gc(): Promise<any>;
    timeBegin(name: string): Promise<any>;
    timeEnd(name: string, restartName?: string | null): Promise<any>;
    readPerfLog(): Promise<PerfLogEvent[]>;
    perfLogFeatures(): PerfLogFeatures;
    supports(capabilities: {
        [key: string]: any;
    }): boolean;
}

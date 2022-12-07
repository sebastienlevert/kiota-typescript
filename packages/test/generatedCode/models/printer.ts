import {PrintConnector, PrinterBase, PrinterShare, PrintTaskTrigger} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Printer extends Partial<Parsable>, PrinterBase {
    /** The acceptingJobs property */
    acceptingJobs?: boolean;
    /** The connectors that are associated with the printer. */
    connectors?: PrintConnector[];
    /** True if the printer has a physical device for printing. Read-only. */
    hasPhysicalDevice?: boolean;
    /** True if the printer is shared; false otherwise. Read-only. */
    isShared?: boolean;
    /** The most recent dateTimeOffset when a printer interacted with Universal Print. Read-only. */
    lastSeenDateTime?: Date;
    /** The DateTimeOffset when the printer was registered. Read-only. */
    registeredDateTime?: Date;
    /** The share property */
    share?: PrinterShare;
    /** The list of printerShares that are associated with the printer. Currently, only one printerShare can be associated with the printer. Read-only. Nullable. */
    shares?: PrinterShare[];
    /** A list of task triggers that are associated with the printer. */
    taskTriggers?: PrintTaskTrigger[];
}

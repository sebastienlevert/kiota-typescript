import {Entity, PrinterCapabilities, PrinterDefaults, PrinterLocation, PrinterStatus, PrintJob} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrinterBase extends Entity, Partial<Parsable> {
    /** The capabilities of the printer/printerShare. */
    capabilities?: PrinterCapabilities;
    /** The default print settings of printer/printerShare. */
    defaults?: PrinterDefaults;
    /** The name of the printer/printerShare. */
    displayName?: string;
    /** Whether the printer/printerShare is currently accepting new print jobs. */
    isAcceptingJobs?: boolean;
    /** The list of jobs that are queued for printing by the printer/printerShare. */
    jobs?: PrintJob[];
    /** The physical and/or organizational location of the printer/printerShare. */
    location?: PrinterLocation;
    /** The manufacturer of the printer/printerShare. */
    manufacturer?: string;
    /** The model name of the printer/printerShare. */
    model?: string;
    /** The status property */
    status?: PrinterStatus;
}

import {Entity, PrinterCapabilities, PrinterDefaults, PrinterLocation, PrinterStatus, PrintJob} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrinterBase extends Entity, Partial<Parsable> {
    /** The capabilities property */
    capabilities?: PrinterCapabilities;
    /** The defaults property */
    defaults?: PrinterDefaults;
    /** The displayName property */
    displayName?: string;
    /** The isAcceptingJobs property */
    isAcceptingJobs?: boolean;
    /** The jobs property */
    jobs?: PrintJob[];
    /** The location property */
    location?: PrinterLocation;
    /** The manufacturer property */
    manufacturer?: string;
    /** The model property */
    model?: string;
    /** The name property */
    name?: string;
    /** The status property */
    status?: PrinterStatus;
}

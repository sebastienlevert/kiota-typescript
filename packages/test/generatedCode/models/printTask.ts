import {Entity, PrintTaskDefinition, PrintTaskStatus, PrintTaskTrigger} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintTask extends Entity, Partial<Parsable> {
    /** The definition property */
    definition?: PrintTaskDefinition;
    /** The URL for the print entity that triggered this task. For example, https://graph.microsoft.com/beta/print/printers/{printerId}/jobs/{jobId}. Read-only. */
    parentUrl?: string;
    /** The status property */
    status?: PrintTaskStatus;
    /** The trigger property */
    trigger?: PrintTaskTrigger;
}

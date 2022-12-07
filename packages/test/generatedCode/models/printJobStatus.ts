import {PrintJobProcessingState} from './printJobProcessingState';
import {PrintJobStateDetail} from './printJobStateDetail';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PrintJobStatus extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** The acquiredByPrinter property */
    acquiredByPrinter?: boolean;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** A human-readable description of the print job's current processing state. Read-only. */
    description?: string;
    /** Additional details for print job state. Valid values are described in the following table. Read-only. */
    details?: PrintJobStateDetail[];
    /** True if the job was acknowledged by a printer; false otherwise. Read-only. */
    isAcquiredByPrinter?: boolean;
    /** The processingState property */
    processingState?: PrintJobProcessingState;
    /** The processingStateDescription property */
    processingStateDescription?: string;
    /** The state property */
    state?: PrintJobProcessingState;
}

import {PrinterProcessingState} from './printerProcessingState';
import {PrinterProcessingStateDetail} from './printerProcessingStateDetail';
import {PrinterProcessingStateReason} from './printerProcessingStateReason';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PrinterStatus extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** A human-readable description of the printer's current processing state. Read-only. */
    description?: string;
    /** The list of details describing why the printer is in the current state. Valid values are described in the following table. Read-only. */
    details?: PrinterProcessingStateDetail[];
    /** The processingState property */
    processingState?: PrinterProcessingState;
    /** The processingStateDescription property */
    processingStateDescription?: string;
    /** The processingStateReasons property */
    processingStateReasons?: PrinterProcessingStateReason[];
    /** The state property */
    state?: PrinterProcessingState;
}

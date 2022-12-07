import {PrintTaskProcessingState} from './printTaskProcessingState';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PrintTaskStatus extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** A human-readable description of the current processing state of the printTask. */
    description?: string;
    /** The state property */
    state?: PrintTaskProcessingState;
}

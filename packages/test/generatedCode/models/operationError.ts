import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface OperationError extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Operation error code. */
    code?: string;
    /** Operation error message. */
    message?: string;
}

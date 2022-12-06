import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface OnenoteOperationError extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The error code. */
    code?: string;
    /** The error message. */
    message?: string;
    /** The OdataType property */
    odataType?: string;
}

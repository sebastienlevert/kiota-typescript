import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookOperationError extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The error code. */
    code?: string;
    /** The innerError property */
    innerError?: WorkbookOperationError;
    /** The error message. */
    message?: string;
}

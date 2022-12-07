import {PublicErrorDetail, PublicInnerError} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PublicError extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Represents the error code. */
    code?: string;
    /** Details of the error. */
    details?: PublicErrorDetail[];
    /** The innerError property */
    innerError?: PublicInnerError;
    /** A non-localized message for the developer. */
    message?: string;
    /** The target of the error. */
    target?: string;
}

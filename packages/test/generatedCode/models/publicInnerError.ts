import {PublicErrorDetail} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PublicInnerError extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The error code. */
    code?: string;
    /** A collection of error details. */
    details?: PublicErrorDetail[];
    /** The error message. */
    message?: string;
    /** The target of the error. */
    target?: string;
}

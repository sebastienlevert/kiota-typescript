import {ErrorDetails, InnerError} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MainError extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The code property */
    code?: string;
    /** The details property */
    details?: ErrorDetails[];
    /** The innererror property */
    innererror?: InnerError;
    /** The message property */
    message?: string;
    /** The target property */
    target?: string;
}

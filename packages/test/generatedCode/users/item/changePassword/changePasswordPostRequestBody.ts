import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ChangePasswordPostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The currentPassword property */
    currentPassword?: string;
    /** The newPassword property */
    newPassword?: string;
}

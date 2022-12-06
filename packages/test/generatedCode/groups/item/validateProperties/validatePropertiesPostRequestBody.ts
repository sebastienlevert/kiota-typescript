import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ValidatePropertiesPostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The displayName property */
    displayName?: string;
    /** The mailNickname property */
    mailNickname?: string;
    /** The onBehalfOfUserId property */
    onBehalfOfUserId?: string;
}

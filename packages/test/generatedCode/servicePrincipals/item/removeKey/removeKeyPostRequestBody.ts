import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RemoveKeyPostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The keyId property */
    keyId?: string;
    /** The proof property */
    proof?: string;
}

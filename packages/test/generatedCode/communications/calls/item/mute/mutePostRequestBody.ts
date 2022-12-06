import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MutePostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The clientContext property */
    clientContext?: string;
}

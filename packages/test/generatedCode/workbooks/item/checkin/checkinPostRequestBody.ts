import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CheckinPostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The checkInAs property */
    checkInAs?: string;
    /** The comment property */
    comment?: string;
}

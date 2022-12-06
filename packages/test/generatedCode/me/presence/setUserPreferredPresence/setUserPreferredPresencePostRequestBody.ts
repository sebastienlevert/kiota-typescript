import {AdditionalDataHolder, Duration, Parsable} from '@microsoft/kiota-abstractions';

export interface SetUserPreferredPresencePostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** The activity property */
    activity?: string;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The availability property */
    availability?: string;
    /** The expirationDuration property */
    expirationDuration?: Duration;
}

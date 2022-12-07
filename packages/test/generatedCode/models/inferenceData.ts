import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface InferenceData extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Confidence score reflecting the accuracy of the data inferred about the user. */
    confidenceScore?: number;
    /** Records if the user has confirmed this inference as being True or False. */
    userHasVerifiedAccuracy?: boolean;
}

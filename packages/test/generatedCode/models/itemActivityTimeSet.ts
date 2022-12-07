import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ItemActivityTimeSet extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The lastRecordedDateTime property */
    lastRecordedDateTime?: Date;
    /** When the activity was observed to take place. */
    observedDateTime?: Date;
    /** When the observation was recorded on the service. */
    recordedDateTime?: Date;
}

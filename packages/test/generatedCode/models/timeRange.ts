import {AdditionalDataHolder, Parsable, TimeOnly} from '@microsoft/kiota-abstractions';

export interface TimeRange extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** End time for the time range. */
    endTime?: TimeOnly;
    /** The OdataType property */
    odataType?: string;
    /** Start time for the time range. */
    startTime?: TimeOnly;
}

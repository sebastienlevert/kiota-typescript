import {DateTimeTimeZone} from '../../../models/';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface GetSchedulePostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The AvailabilityViewInterval property */
    availabilityViewInterval?: number;
    /** The EndTime property */
    endTime?: DateTimeTimeZone;
    /** The Schedules property */
    schedules?: string[];
    /** The StartTime property */
    startTime?: DateTimeTimeZone;
}

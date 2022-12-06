import {ScheduleEntityTheme} from './scheduleEntityTheme';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ShiftActivity extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Customer defined code for the shiftActivity. Required. */
    code?: string;
    /** The name of the shiftActivity. Required. */
    displayName?: string;
    /** The end date and time for the shiftActivity. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Required. */
    endDateTime?: Date;
    /** Indicates whether the microsoft.graph.user should be paid for the activity during their shift. Required. */
    isPaid?: boolean;
    /** The OdataType property */
    odataType?: string;
    /** The start date and time for the shiftActivity. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Required. */
    startDateTime?: Date;
    /** The theme property */
    theme?: ScheduleEntityTheme;
}

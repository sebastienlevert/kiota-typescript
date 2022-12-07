import {RecurrenceRangeType} from './recurrenceRangeType';
import {AdditionalDataHolder, DateOnly, Parsable} from '@microsoft/kiota-abstractions';

export interface RecurrenceRange extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The date to stop applying the recurrence pattern. Depending on the recurrence pattern of the event, the last occurrence of the meeting may not be this date. Required if type is endDate. */
    endDate?: DateOnly;
    /** The number of times to repeat the event. Required and must be positive if type is numbered. */
    numberOfOccurrences?: number;
    /** Time zone for the startDate and endDate properties. Optional. If not specified, the time zone of the event is used. */
    recurrenceTimeZone?: string;
    /** The date to start applying the recurrence pattern. The first occurrence of the meeting may be this date or later, depending on the recurrence pattern of the event. Must be the same value as the start property of the recurring event. Required. */
    startDate?: DateOnly;
    /** The type property */
    type?: RecurrenceRangeType;
}

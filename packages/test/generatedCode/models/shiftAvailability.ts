import {PatternedRecurrence, TimeRange} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ShiftAvailability extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The recurrence property */
    recurrence?: PatternedRecurrence;
    /** The time slot(s) preferred by the user. */
    timeSlots?: TimeRange[];
    /** Specifies the time zone for the indicated time. */
    timeZone?: string;
}

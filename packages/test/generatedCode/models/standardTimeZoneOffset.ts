import {DayOfWeek} from './dayOfWeek';
import {AdditionalDataHolder, Parsable, TimeOnly} from '@microsoft/kiota-abstractions';

export interface StandardTimeZoneOffset extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Represents the nth occurrence of the day of week that the transition from daylight saving time to standard time occurs. */
    dayOccurrence?: number;
    /** Represents the day of the week when the transition from daylight saving time to standard time. */
    dayOfWeek?: DayOfWeek;
    /** Represents the month of the year when the transition from daylight saving time to standard time occurs. */
    month?: number;
    /** The OdataType property */
    odataType?: string;
    /** Represents the time of day when the transition from daylight saving time to standard time occurs. */
    time?: TimeOnly;
    /** Represents how frequently in terms of years the change from daylight saving time to standard time occurs. For example, a value of 0 means every year. */
    year?: number;
}

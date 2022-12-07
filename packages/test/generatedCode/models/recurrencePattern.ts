import {DayOfWeek} from './dayOfWeek';
import {RecurrencePatternType} from './recurrencePatternType';
import {WeekIndex} from './weekIndex';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RecurrencePattern extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The day of the month on which the event occurs. Required if type is absoluteMonthly or absoluteYearly. */
    dayOfMonth?: number;
    /** A collection of the days of the week on which the event occurs. The possible values are: sunday, monday, tuesday, wednesday, thursday, friday, saturday. If type is relativeMonthly or relativeYearly, and daysOfWeek specifies more than one day, the event falls on the first day that satisfies the pattern.  Required if type is weekly, relativeMonthly, or relativeYearly. */
    daysOfWeek?: DayOfWeek[];
    /** The firstDayOfWeek property */
    firstDayOfWeek?: DayOfWeek;
    /** The index property */
    index?: WeekIndex;
    /** The number of units between occurrences, where units can be in days, weeks, months, or years, depending on the type. Required. */
    interval?: number;
    /** The month in which the event occurs.  This is a number from 1 to 12. */
    month?: number;
    /** The type property */
    type?: RecurrencePatternType;
}

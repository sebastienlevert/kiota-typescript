import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RegionalFormatOverrides extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The calendar to use, e.g., Gregorian Calendar.Returned by default. */
    calendar?: string;
    /** The first day of the week to use, e.g., Sunday.Returned by default. */
    firstDayOfWeek?: string;
    /** The long date time format to be used for displaying dates.Returned by default. */
    longDateFormat?: string;
    /** The long time format to be used for displaying time.Returned by default. */
    longTimeFormat?: string;
    /** The short date time format to be used for displaying dates.Returned by default. */
    shortDateFormat?: string;
    /** The short time format to be used for displaying time.Returned by default. */
    shortTimeFormat?: string;
    /** The timezone to be used for displaying time.Returned by default. */
    timeZone?: string;
}

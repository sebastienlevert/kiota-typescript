import {DaylightTimeZoneOffset, StandardTimeZoneOffset, TimeZoneBase} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CustomTimeZone extends Partial<Parsable>, TimeZoneBase {
    /** The time offset of the time zone from Coordinated Universal Time (UTC). This value is in minutes. Time zones that are ahead of UTC have a positive offset; time zones that are behind UTC have a negative offset. */
    bias?: number;
    /** Specifies when the time zone switches from standard time to daylight saving time. */
    daylightOffset?: DaylightTimeZoneOffset;
    /** Specifies when the time zone switches from daylight saving time to standard time. */
    standardOffset?: StandardTimeZoneOffset;
}

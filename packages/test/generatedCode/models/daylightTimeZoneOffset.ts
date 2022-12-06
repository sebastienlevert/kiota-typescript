import {StandardTimeZoneOffset} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DaylightTimeZoneOffset extends Partial<Parsable>, StandardTimeZoneOffset {
    /** The time offset from Coordinated Universal Time (UTC) for daylight saving time. This value is in minutes. */
    daylightBias?: number;
}

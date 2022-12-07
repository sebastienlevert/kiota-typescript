import {AnalyticsActivityType} from './analyticsActivityType';
import {Entity} from './index';
import {DateOnly, Duration, Parsable} from '@microsoft/kiota-abstractions';

export interface ActivityStatistics extends Entity, Partial<Parsable> {
    /** The activity property */
    activity?: AnalyticsActivityType;
    /** Total hours spent on the activity. The value is represented in ISO 8601 format for durations. */
    duration?: Duration;
    /** Date when the activity ended, expressed in ISO 8601 format for calendar dates. For example, the property value could be '2019-07-03' that follows the YYYY-MM-DD format. */
    endDate?: DateOnly;
    /** Date when the activity started, expressed in ISO 8601 format for calendar dates. For example, the property value could be '2019-07-04' that follows the YYYY-MM-DD format. */
    startDate?: DateOnly;
    /** The time zone that the user sets in Microsoft Outlook is used for the computation. For example, the property value could be 'Pacific Standard Time.' */
    timeZoneUsed?: string;
}

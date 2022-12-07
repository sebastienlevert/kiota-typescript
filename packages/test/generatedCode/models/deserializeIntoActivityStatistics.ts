import {AnalyticsActivityType} from './analyticsActivityType';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ActivityStatistics} from './index';
import {DateOnly, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoActivityStatistics(activityStatistics: ActivityStatistics | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(activityStatistics),
        "activity": n => { activityStatistics.activity = n.getEnumValue<AnalyticsActivityType>(AnalyticsActivityType) as any ; },
        "duration": n => { activityStatistics.duration = n.getDurationValue() as any ; },
        "endDate": n => { activityStatistics.endDate = n.getDateOnlyValue() as any ; },
        "startDate": n => { activityStatistics.startDate = n.getDateOnlyValue() as any ; },
        "timeZoneUsed": n => { activityStatistics.timeZoneUsed = n.getStringValue() as any ; },
    }
}

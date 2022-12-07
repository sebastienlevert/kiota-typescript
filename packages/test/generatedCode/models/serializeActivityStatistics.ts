import {AnalyticsActivityType} from './analyticsActivityType';
import {ActivityStatistics} from './index';
import {serializeEntity} from './serializeEntity';
import {DateOnly, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeActivityStatistics(writer: SerializationWriter, activityStatistics: ActivityStatistics | undefined = {}) : void {
        serializeEntity(writer, activityStatistics)
            writer.writeEnumValue<AnalyticsActivityType>("activity", activityStatistics.activity);
            writer.writeDurationValue("duration", activityStatistics.duration);
            writer.writeDateOnlyValue("endDate", activityStatistics.endDate);
            writer.writeDateOnlyValue("startDate", activityStatistics.startDate);
            writer.writeStringValue("timeZoneUsed", activityStatistics.timeZoneUsed);
}

import {TimeRange} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export function serializeTimeRange(writer: SerializationWriter, timeRange: TimeRange | undefined = {}) : void {
            writer.writeTimeOnlyValue("endTime", timeRange.endTime);
            writer.writeTimeOnlyValue("startTime", timeRange.startTime);
}

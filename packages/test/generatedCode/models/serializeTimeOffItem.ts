import {TimeOffItem} from './index';
import {serializeScheduleEntity} from './serializeScheduleEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTimeOffItem(writer: SerializationWriter, timeOffItem: TimeOffItem | undefined = {}) : void {
        serializeScheduleEntity(writer, timeOffItem)
            writer.writeStringValue("timeOffReasonId", timeOffItem.timeOffReasonId);
}

import {FreeBusyStatus} from './freeBusyStatus';
import {ScheduleItem} from './index';
import {serializeDateTimeTimeZone} from './serializeDateTimeTimeZone';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeScheduleItem(writer: SerializationWriter, scheduleItem: ScheduleItem | undefined = {}) : void {
            writer.writeObjectValueFromMethod("end", scheduleItem.end as any, serializeDateTimeTimeZone);
            writer.writeBooleanValue("isPrivate", scheduleItem.isPrivate);
            writer.writeStringValue("location", scheduleItem.location);
            writer.writeStringValue("@odata.type", scheduleItem.odataType);
            writer.writeObjectValueFromMethod("start", scheduleItem.start as any, serializeDateTimeTimeZone);
            writer.writeEnumValue<FreeBusyStatus>("status", scheduleItem.status);
            writer.writeStringValue("subject", scheduleItem.subject);
}

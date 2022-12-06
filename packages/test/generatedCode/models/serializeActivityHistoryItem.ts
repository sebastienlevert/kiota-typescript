import {ActivityHistoryItem} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeUserActivity} from './serializeUserActivity';
import {Status} from './status';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeActivityHistoryItem(writer: SerializationWriter, activityHistoryItem: ActivityHistoryItem | undefined = {}) : void {
        serializeEntity(writer, activityHistoryItem)
            writer.writeNumberValue("activeDurationSeconds", activityHistoryItem.activeDurationSeconds);
            writer.writeObjectValueFromMethod("activity", activityHistoryItem.activity as any, serializeUserActivity);
            writer.writeDateValue("createdDateTime", activityHistoryItem.createdDateTime);
            writer.writeDateValue("expirationDateTime", activityHistoryItem.expirationDateTime);
            writer.writeDateValue("lastActiveDateTime", activityHistoryItem.lastActiveDateTime);
            writer.writeDateValue("lastModifiedDateTime", activityHistoryItem.lastModifiedDateTime);
            writer.writeDateValue("startedDateTime", activityHistoryItem.startedDateTime);
            writer.writeEnumValue<Status>("status", activityHistoryItem.status);
            writer.writeStringValue("userTimezone", activityHistoryItem.userTimezone);
}

import {UserActivity} from './index';
import {serializeActivityHistoryItem} from './serializeActivityHistoryItem';
import {serializeEntity} from './serializeEntity';
import {serializeJson} from './serializeJson';
import {serializeVisualInfo} from './serializeVisualInfo';
import {Status} from './status';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserActivity(writer: SerializationWriter, userActivity: UserActivity | undefined = {}) : void {
        serializeEntity(writer, userActivity)
            writer.writeStringValue("activationUrl", userActivity.activationUrl);
            writer.writeStringValue("activitySourceHost", userActivity.activitySourceHost);
            writer.writeStringValue("appActivityId", userActivity.appActivityId);
            writer.writeStringValue("appDisplayName", userActivity.appDisplayName);
            writer.writeObjectValueFromMethod("contentInfo", userActivity.contentInfo as any, serializeJson);
            writer.writeStringValue("contentUrl", userActivity.contentUrl);
            writer.writeDateValue("createdDateTime", userActivity.createdDateTime);
            writer.writeDateValue("expirationDateTime", userActivity.expirationDateTime);
            writer.writeStringValue("fallbackUrl", userActivity.fallbackUrl);
            writer.writeCollectionOfObjectValuesFromMethod("historyItems", userActivity.historyItems as any, serializeActivityHistoryItem);
            writer.writeDateValue("lastModifiedDateTime", userActivity.lastModifiedDateTime);
            writer.writeEnumValue<Status>("status", userActivity.status);
            writer.writeStringValue("userTimezone", userActivity.userTimezone);
            writer.writeObjectValueFromMethod("visualElements", userActivity.visualElements as any, serializeVisualInfo);
}

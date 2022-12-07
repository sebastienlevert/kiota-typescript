import {Notification} from './index';
import {Priority} from './priority';
import {serializeEntity} from './serializeEntity';
import {serializePayloadTypes} from './serializePayloadTypes';
import {serializeTargetPolicyEndpoints} from './serializeTargetPolicyEndpoints';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeNotification(writer: SerializationWriter, notification: Notification | undefined = {}) : void {
        serializeEntity(writer, notification)
            writer.writeNumberValue("displayTimeToLive", notification.displayTimeToLive);
            writer.writeDateValue("expirationDateTime", notification.expirationDateTime);
            writer.writeStringValue("groupName", notification.groupName);
            writer.writeObjectValueFromMethod("payload", notification.payload as any, serializePayloadTypes);
            writer.writeEnumValue<Priority>("priority", notification.priority);
            writer.writeStringValue("targetHostName", notification.targetHostName);
            writer.writeObjectValueFromMethod("targetPolicy", notification.targetPolicy as any, serializeTargetPolicyEndpoints);
}

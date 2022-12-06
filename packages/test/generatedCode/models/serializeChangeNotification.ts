import {ChangeType} from './changeType';
import {ChangeNotification} from './index';
import {LifecycleEventType} from './lifecycleEventType';
import {serializeChangeNotificationEncryptedContent} from './serializeChangeNotificationEncryptedContent';
import {serializeResourceData} from './serializeResourceData';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChangeNotification(writer: SerializationWriter, changeNotification: ChangeNotification | undefined = {}) : void {
            writer.writeEnumValue<ChangeType>("changeType", changeNotification.changeType);
            writer.writeStringValue("clientState", changeNotification.clientState);
            writer.writeObjectValueFromMethod("encryptedContent", changeNotification.encryptedContent as any, serializeChangeNotificationEncryptedContent);
            writer.writeStringValue("id", changeNotification.id);
            writer.writeEnumValue<LifecycleEventType>("lifecycleEvent", changeNotification.lifecycleEvent);
            writer.writeStringValue("@odata.type", changeNotification.odataType);
            writer.writeStringValue("resource", changeNotification.resource);
            writer.writeObjectValueFromMethod("resourceData", changeNotification.resourceData as any, serializeResourceData);
            writer.writeDateValue("subscriptionExpirationDateTime", changeNotification.subscriptionExpirationDateTime);
            writer.writeStringValue("subscriptionId", changeNotification.subscriptionId);
            writer.writeStringValue("tenantId", changeNotification.tenantId);
}

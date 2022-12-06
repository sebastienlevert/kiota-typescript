import {ChangeType} from './changeType';
import {deserializeIntoChangeNotificationEncryptedContent} from './deserializeIntoChangeNotificationEncryptedContent';
import {deserializeIntoResourceData} from './deserializeIntoResourceData';
import {ChangeNotification} from './index';
import {LifecycleEventType} from './lifecycleEventType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChangeNotification(changeNotification: ChangeNotification | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "changeType": n => { changeNotification.changeType = n.getEnumValue<ChangeType>(ChangeType) as any ; },
        "clientState": n => { changeNotification.clientState = n.getStringValue() as any ; },
        "encryptedContent": n => { changeNotification.encryptedContent = n.getObject(deserializeIntoChangeNotificationEncryptedContent) as any ; },
        "id": n => { changeNotification.id = n.getStringValue() as any ; },
        "lifecycleEvent": n => { changeNotification.lifecycleEvent = n.getEnumValue<LifecycleEventType>(LifecycleEventType) as any ; },
        "@odata.type": n => { changeNotification.odataType = n.getStringValue() as any ; },
        "resource": n => { changeNotification.resource = n.getStringValue() as any ; },
        "resourceData": n => { changeNotification.resourceData = n.getObject(deserializeIntoResourceData) as any ; },
        "subscriptionExpirationDateTime": n => { changeNotification.subscriptionExpirationDateTime = n.getDateValue() as any ; },
        "subscriptionId": n => { changeNotification.subscriptionId = n.getStringValue() as any ; },
        "tenantId": n => { changeNotification.tenantId = n.getStringValue() as any ; },
    }
}

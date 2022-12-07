import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Subscription} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSubscription(subscription: Subscription | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(subscription),
        "applicationId": n => { subscription.applicationId = n.getStringValue() as any ; },
        "changeType": n => { subscription.changeType = n.getStringValue() as any ; },
        "clientState": n => { subscription.clientState = n.getStringValue() as any ; },
        "creatorId": n => { subscription.creatorId = n.getStringValue() as any ; },
        "encryptionCertificate": n => { subscription.encryptionCertificate = n.getStringValue() as any ; },
        "encryptionCertificateId": n => { subscription.encryptionCertificateId = n.getStringValue() as any ; },
        "expirationDateTime": n => { subscription.expirationDateTime = n.getDateValue() as any ; },
        "includeResourceData": n => { subscription.includeResourceData = n.getBooleanValue() as any ; },
        "latestSupportedTlsVersion": n => { subscription.latestSupportedTlsVersion = n.getStringValue() as any ; },
        "lifecycleNotificationUrl": n => { subscription.lifecycleNotificationUrl = n.getStringValue() as any ; },
        "notificationContentType": n => { subscription.notificationContentType = n.getStringValue() as any ; },
        "notificationQueryOptions": n => { subscription.notificationQueryOptions = n.getStringValue() as any ; },
        "notificationUrl": n => { subscription.notificationUrl = n.getStringValue() as any ; },
        "notificationUrlAppId": n => { subscription.notificationUrlAppId = n.getStringValue() as any ; },
        "resource": n => { subscription.resource = n.getStringValue() as any ; },
    }
}

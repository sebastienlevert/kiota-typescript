import {Subscription} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSubscription(writer: SerializationWriter, subscription: Subscription | undefined = {}) : void {
        serializeEntity(writer, subscription)
            writer.writeStringValue("applicationId", subscription.applicationId);
            writer.writeStringValue("changeType", subscription.changeType);
            writer.writeStringValue("clientState", subscription.clientState);
            writer.writeStringValue("creatorId", subscription.creatorId);
            writer.writeStringValue("encryptionCertificate", subscription.encryptionCertificate);
            writer.writeStringValue("encryptionCertificateId", subscription.encryptionCertificateId);
            writer.writeDateValue("expirationDateTime", subscription.expirationDateTime);
            writer.writeBooleanValue("includeResourceData", subscription.includeResourceData);
            writer.writeStringValue("latestSupportedTlsVersion", subscription.latestSupportedTlsVersion);
            writer.writeStringValue("lifecycleNotificationUrl", subscription.lifecycleNotificationUrl);
            writer.writeStringValue("notificationContentType", subscription.notificationContentType);
            writer.writeStringValue("notificationQueryOptions", subscription.notificationQueryOptions);
            writer.writeStringValue("notificationUrl", subscription.notificationUrl);
            writer.writeStringValue("notificationUrlAppId", subscription.notificationUrlAppId);
            writer.writeStringValue("resource", subscription.resource);
}

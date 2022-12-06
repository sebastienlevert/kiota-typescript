import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ApplePushNotificationCertificate} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApplePushNotificationCertificate(applePushNotificationCertificate: ApplePushNotificationCertificate | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(applePushNotificationCertificate),
        "appleIdentifier": n => { applePushNotificationCertificate.appleIdentifier = n.getStringValue() as any ; },
        "certificate": n => { applePushNotificationCertificate.certificate = n.getStringValue() as any ; },
        "certificateSerialNumber": n => { applePushNotificationCertificate.certificateSerialNumber = n.getStringValue() as any ; },
        "certificateUploadFailureReason": n => { applePushNotificationCertificate.certificateUploadFailureReason = n.getStringValue() as any ; },
        "certificateUploadStatus": n => { applePushNotificationCertificate.certificateUploadStatus = n.getStringValue() as any ; },
        "expirationDateTime": n => { applePushNotificationCertificate.expirationDateTime = n.getDateValue() as any ; },
        "lastModifiedDateTime": n => { applePushNotificationCertificate.lastModifiedDateTime = n.getDateValue() as any ; },
        "topicIdentifier": n => { applePushNotificationCertificate.topicIdentifier = n.getStringValue() as any ; },
    }
}

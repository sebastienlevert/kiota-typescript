import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ApplePushNotificationCertificate extends Entity, Partial<Parsable> {
    /** Apple Id of the account used to create the MDM push certificate. */
    appleIdentifier?: string;
    /** Not yet documented */
    certificate?: string;
    /** Certificate serial number. This property is read-only. */
    certificateSerialNumber?: string;
    /** The reason the certificate upload failed. */
    certificateUploadFailureReason?: string;
    /** The certificate upload status. */
    certificateUploadStatus?: string;
    /** The expiration date and time for Apple push notification certificate. */
    expirationDateTime?: Date;
    /** Last modified date and time for Apple push notification certificate. */
    lastModifiedDateTime?: Date;
    /** Topic Id. */
    topicIdentifier?: string;
}

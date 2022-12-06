import {DownloadApplePushNotificationCertificateSigningRequestResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDownloadApplePushNotificationCertificateSigningRequestResponse(writer: SerializationWriter, downloadApplePushNotificationCertificateSigningRequestResponse: DownloadApplePushNotificationCertificateSigningRequestResponse | undefined = {}) : void {
            writer.writeStringValue("value", downloadApplePushNotificationCertificateSigningRequestResponse.value);
}

import {DownloadApplePushNotificationCertificateSigningRequestResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDownloadApplePushNotificationCertificateSigningRequestResponse(downloadApplePushNotificationCertificateSigningRequestResponse: DownloadApplePushNotificationCertificateSigningRequestResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { downloadApplePushNotificationCertificateSigningRequestResponse.value = n.getStringValue() as any ; },
    }
}

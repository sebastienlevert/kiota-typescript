import {ChangeNotificationEncryptedContent} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChangeNotificationEncryptedContent(writer: SerializationWriter, changeNotificationEncryptedContent: ChangeNotificationEncryptedContent | undefined = {}) : void {
            writer.writeStringValue("data", changeNotificationEncryptedContent.data);
            writer.writeStringValue("dataKey", changeNotificationEncryptedContent.dataKey);
            writer.writeStringValue("dataSignature", changeNotificationEncryptedContent.dataSignature);
            writer.writeStringValue("encryptionCertificateId", changeNotificationEncryptedContent.encryptionCertificateId);
            writer.writeStringValue("encryptionCertificateThumbprint", changeNotificationEncryptedContent.encryptionCertificateThumbprint);
            writer.writeStringValue("@odata.type", changeNotificationEncryptedContent.odataType);
}

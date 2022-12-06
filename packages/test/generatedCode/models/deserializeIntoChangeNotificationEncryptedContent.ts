import {ChangeNotificationEncryptedContent} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChangeNotificationEncryptedContent(changeNotificationEncryptedContent: ChangeNotificationEncryptedContent | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "data": n => { changeNotificationEncryptedContent.data = n.getStringValue() as any ; },
        "dataKey": n => { changeNotificationEncryptedContent.dataKey = n.getStringValue() as any ; },
        "dataSignature": n => { changeNotificationEncryptedContent.dataSignature = n.getStringValue() as any ; },
        "encryptionCertificateId": n => { changeNotificationEncryptedContent.encryptionCertificateId = n.getStringValue() as any ; },
        "encryptionCertificateThumbprint": n => { changeNotificationEncryptedContent.encryptionCertificateThumbprint = n.getStringValue() as any ; },
        "@odata.type": n => { changeNotificationEncryptedContent.odataType = n.getStringValue() as any ; },
    }
}

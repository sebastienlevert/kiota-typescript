import {X509CertificateUserBinding} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoX509CertificateUserBinding(x509CertificateUserBinding: X509CertificateUserBinding | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { x509CertificateUserBinding.odataType = n.getStringValue() as any ; },
        "priority": n => { x509CertificateUserBinding.priority = n.getNumberValue() as any ; },
        "userProperty": n => { x509CertificateUserBinding.userProperty = n.getStringValue() as any ; },
        "x509CertificateField": n => { x509CertificateUserBinding.x509CertificateField = n.getStringValue() as any ; },
    }
}

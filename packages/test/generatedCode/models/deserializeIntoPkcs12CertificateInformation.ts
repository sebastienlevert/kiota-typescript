import {Pkcs12CertificateInformation} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPkcs12CertificateInformation(pkcs12CertificateInformation: Pkcs12CertificateInformation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "isActive": n => { pkcs12CertificateInformation.isActive = n.getBooleanValue() as any ; },
        "notAfter": n => { pkcs12CertificateInformation.notAfter = n.getNumberValue() as any ; },
        "notBefore": n => { pkcs12CertificateInformation.notBefore = n.getNumberValue() as any ; },
        "@odata.type": n => { pkcs12CertificateInformation.odataType = n.getStringValue() as any ; },
        "thumbprint": n => { pkcs12CertificateInformation.thumbprint = n.getStringValue() as any ; },
    }
}

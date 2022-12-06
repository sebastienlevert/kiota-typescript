import {CertificateAuthority} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCertificateAuthority(certificateAuthority: CertificateAuthority | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "certificate": n => { certificateAuthority.certificate = n.getStringValue() as any ; },
        "certificateRevocationListUrl": n => { certificateAuthority.certificateRevocationListUrl = n.getStringValue() as any ; },
        "deltaCertificateRevocationListUrl": n => { certificateAuthority.deltaCertificateRevocationListUrl = n.getStringValue() as any ; },
        "isRootAuthority": n => { certificateAuthority.isRootAuthority = n.getBooleanValue() as any ; },
        "issuer": n => { certificateAuthority.issuer = n.getStringValue() as any ; },
        "issuerSki": n => { certificateAuthority.issuerSki = n.getStringValue() as any ; },
        "@odata.type": n => { certificateAuthority.odataType = n.getStringValue() as any ; },
    }
}

import {deserializeIntoCertificateAuthority} from './deserializeIntoCertificateAuthority';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {CertificateBasedAuthConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCertificateBasedAuthConfiguration(certificateBasedAuthConfiguration: CertificateBasedAuthConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(certificateBasedAuthConfiguration),
        "certificateAuthorities": n => { certificateBasedAuthConfiguration.certificateAuthorities = n.getCollectionOfObjectValuesFromMethod(deserializeIntoCertificateAuthority) as any ; },
    }
}

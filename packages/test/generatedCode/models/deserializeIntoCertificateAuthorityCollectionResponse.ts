import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoCertificateAuthority} from './deserializeIntoCertificateAuthority';
import {CertificateAuthorityCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCertificateAuthorityCollectionResponse(certificateAuthorityCollectionResponse: CertificateAuthorityCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(certificateAuthorityCollectionResponse),
        "value": n => { certificateAuthorityCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoCertificateAuthority) as any ; },
    }
}

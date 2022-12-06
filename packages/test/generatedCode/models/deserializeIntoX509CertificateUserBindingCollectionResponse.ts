import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoX509CertificateUserBinding} from './deserializeIntoX509CertificateUserBinding';
import {X509CertificateUserBindingCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoX509CertificateUserBindingCollectionResponse(x509CertificateUserBindingCollectionResponse: X509CertificateUserBindingCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(x509CertificateUserBindingCollectionResponse),
        "value": n => { x509CertificateUserBindingCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoX509CertificateUserBinding) as any ; },
    }
}

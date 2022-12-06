import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoX509CertificateRule} from './deserializeIntoX509CertificateRule';
import {X509CertificateRuleCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoX509CertificateRuleCollectionResponse(x509CertificateRuleCollectionResponse: X509CertificateRuleCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(x509CertificateRuleCollectionResponse),
        "value": n => { x509CertificateRuleCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoX509CertificateRule) as any ; },
    }
}

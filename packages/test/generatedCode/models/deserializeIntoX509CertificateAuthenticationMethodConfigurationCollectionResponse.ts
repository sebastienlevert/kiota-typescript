import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoX509CertificateAuthenticationMethodConfiguration} from './deserializeIntoX509CertificateAuthenticationMethodConfiguration';
import {X509CertificateAuthenticationMethodConfigurationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoX509CertificateAuthenticationMethodConfigurationCollectionResponse(x509CertificateAuthenticationMethodConfigurationCollectionResponse: X509CertificateAuthenticationMethodConfigurationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(x509CertificateAuthenticationMethodConfigurationCollectionResponse),
        "value": n => { x509CertificateAuthenticationMethodConfigurationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoX509CertificateAuthenticationMethodConfiguration) as any ; },
    }
}

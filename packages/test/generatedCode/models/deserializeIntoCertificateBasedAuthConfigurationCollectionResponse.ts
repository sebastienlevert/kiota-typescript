import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoCertificateBasedAuthConfiguration} from './deserializeIntoCertificateBasedAuthConfiguration';
import {CertificateBasedAuthConfigurationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCertificateBasedAuthConfigurationCollectionResponse(certificateBasedAuthConfigurationCollectionResponse: CertificateBasedAuthConfigurationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(certificateBasedAuthConfigurationCollectionResponse),
        "value": n => { certificateBasedAuthConfigurationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoCertificateBasedAuthConfiguration) as any ; },
    }
}

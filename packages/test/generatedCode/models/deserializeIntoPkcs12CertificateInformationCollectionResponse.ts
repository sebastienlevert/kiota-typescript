import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoPkcs12CertificateInformation} from './deserializeIntoPkcs12CertificateInformation';
import {Pkcs12CertificateInformationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPkcs12CertificateInformationCollectionResponse(pkcs12CertificateInformationCollectionResponse: Pkcs12CertificateInformationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(pkcs12CertificateInformationCollectionResponse),
        "value": n => { pkcs12CertificateInformationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPkcs12CertificateInformation) as any ; },
    }
}

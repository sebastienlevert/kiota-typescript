import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoCertificationControl} from './deserializeIntoCertificationControl';
import {CertificationControlCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCertificationControlCollectionResponse(certificationControlCollectionResponse: CertificationControlCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(certificationControlCollectionResponse),
        "value": n => { certificationControlCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoCertificationControl) as any ; },
    }
}

import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoIosCertificateProfile} from './deserializeIntoIosCertificateProfile';
import {IosCertificateProfileCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosCertificateProfileCollectionResponse(iosCertificateProfileCollectionResponse: IosCertificateProfileCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(iosCertificateProfileCollectionResponse),
        "value": n => { iosCertificateProfileCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIosCertificateProfile) as any ; },
    }
}

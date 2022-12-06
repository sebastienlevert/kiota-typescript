import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoLicenseDetails} from './deserializeIntoLicenseDetails';
import {LicenseDetailsCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLicenseDetailsCollectionResponse(licenseDetailsCollectionResponse: LicenseDetailsCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(licenseDetailsCollectionResponse),
        "value": n => { licenseDetailsCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoLicenseDetails) as any ; },
    }
}

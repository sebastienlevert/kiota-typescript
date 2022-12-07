import {deserializeIntoLicenseDetails} from './deserializeIntoLicenseDetails';
import {LicenseDetailsCollectionResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLicenseDetailsCollectionResponse(licenseDetailsCollectionResponse: LicenseDetailsCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.nextLink": n => { licenseDetailsCollectionResponse.odataNextLink = n.getStringValue() as any ; },
        "value": n => { licenseDetailsCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoLicenseDetails) as any ; },
    }
}

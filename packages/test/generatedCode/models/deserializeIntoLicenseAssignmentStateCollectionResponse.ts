import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoLicenseAssignmentState} from './deserializeIntoLicenseAssignmentState';
import {LicenseAssignmentStateCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLicenseAssignmentStateCollectionResponse(licenseAssignmentStateCollectionResponse: LicenseAssignmentStateCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(licenseAssignmentStateCollectionResponse),
        "value": n => { licenseAssignmentStateCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoLicenseAssignmentState) as any ; },
    }
}

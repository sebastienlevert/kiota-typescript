import {deserializeIntoAssignedLicense} from './deserializeIntoAssignedLicense';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AssignedLicenseCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAssignedLicenseCollectionResponse(assignedLicenseCollectionResponse: AssignedLicenseCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(assignedLicenseCollectionResponse),
        "value": n => { assignedLicenseCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAssignedLicense) as any ; },
    }
}

import {deserializeIntoAccessPackageAssignment} from './deserializeIntoAccessPackageAssignment';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AccessPackageAssignmentCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageAssignmentCollectionResponse(accessPackageAssignmentCollectionResponse: AccessPackageAssignmentCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(accessPackageAssignmentCollectionResponse),
        "value": n => { accessPackageAssignmentCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessPackageAssignment) as any ; },
    }
}

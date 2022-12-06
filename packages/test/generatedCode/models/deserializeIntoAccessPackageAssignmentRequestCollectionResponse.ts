import {deserializeIntoAccessPackageAssignmentRequest} from './deserializeIntoAccessPackageAssignmentRequest';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AccessPackageAssignmentRequestCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageAssignmentRequestCollectionResponse(accessPackageAssignmentRequestCollectionResponse: AccessPackageAssignmentRequestCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(accessPackageAssignmentRequestCollectionResponse),
        "value": n => { accessPackageAssignmentRequestCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessPackageAssignmentRequest) as any ; },
    }
}

import {deserializeIntoAccessPackageAssignmentPolicy} from './deserializeIntoAccessPackageAssignmentPolicy';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AccessPackageAssignmentPolicyCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageAssignmentPolicyCollectionResponse(accessPackageAssignmentPolicyCollectionResponse: AccessPackageAssignmentPolicyCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(accessPackageAssignmentPolicyCollectionResponse),
        "value": n => { accessPackageAssignmentPolicyCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessPackageAssignmentPolicy) as any ; },
    }
}

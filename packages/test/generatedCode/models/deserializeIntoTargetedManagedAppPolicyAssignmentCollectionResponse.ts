import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoTargetedManagedAppPolicyAssignment} from './deserializeIntoTargetedManagedAppPolicyAssignment';
import {TargetedManagedAppPolicyAssignmentCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTargetedManagedAppPolicyAssignmentCollectionResponse(targetedManagedAppPolicyAssignmentCollectionResponse: TargetedManagedAppPolicyAssignmentCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(targetedManagedAppPolicyAssignmentCollectionResponse),
        "value": n => { targetedManagedAppPolicyAssignmentCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTargetedManagedAppPolicyAssignment) as any ; },
    }
}

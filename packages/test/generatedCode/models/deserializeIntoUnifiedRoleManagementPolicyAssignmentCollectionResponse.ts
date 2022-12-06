import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoUnifiedRoleManagementPolicyAssignment} from './deserializeIntoUnifiedRoleManagementPolicyAssignment';
import {UnifiedRoleManagementPolicyAssignmentCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleManagementPolicyAssignmentCollectionResponse(unifiedRoleManagementPolicyAssignmentCollectionResponse: UnifiedRoleManagementPolicyAssignmentCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(unifiedRoleManagementPolicyAssignmentCollectionResponse),
        "value": n => { unifiedRoleManagementPolicyAssignmentCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUnifiedRoleManagementPolicyAssignment) as any ; },
    }
}

import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoUnifiedRoleManagementPolicyApprovalRule} from './deserializeIntoUnifiedRoleManagementPolicyApprovalRule';
import {UnifiedRoleManagementPolicyApprovalRuleCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleManagementPolicyApprovalRuleCollectionResponse(unifiedRoleManagementPolicyApprovalRuleCollectionResponse: UnifiedRoleManagementPolicyApprovalRuleCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(unifiedRoleManagementPolicyApprovalRuleCollectionResponse),
        "value": n => { unifiedRoleManagementPolicyApprovalRuleCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUnifiedRoleManagementPolicyApprovalRule) as any ; },
    }
}

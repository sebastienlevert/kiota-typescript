import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoUnifiedRoleManagementPolicyRule} from './deserializeIntoUnifiedRoleManagementPolicyRule';
import {UnifiedRoleManagementPolicyRuleCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleManagementPolicyRuleCollectionResponse(unifiedRoleManagementPolicyRuleCollectionResponse: UnifiedRoleManagementPolicyRuleCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(unifiedRoleManagementPolicyRuleCollectionResponse),
        "value": n => { unifiedRoleManagementPolicyRuleCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUnifiedRoleManagementPolicyRule) as any ; },
    }
}

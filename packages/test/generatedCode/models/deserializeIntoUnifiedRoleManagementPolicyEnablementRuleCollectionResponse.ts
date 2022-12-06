import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoUnifiedRoleManagementPolicyEnablementRule} from './deserializeIntoUnifiedRoleManagementPolicyEnablementRule';
import {UnifiedRoleManagementPolicyEnablementRuleCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleManagementPolicyEnablementRuleCollectionResponse(unifiedRoleManagementPolicyEnablementRuleCollectionResponse: UnifiedRoleManagementPolicyEnablementRuleCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(unifiedRoleManagementPolicyEnablementRuleCollectionResponse),
        "value": n => { unifiedRoleManagementPolicyEnablementRuleCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUnifiedRoleManagementPolicyEnablementRule) as any ; },
    }
}

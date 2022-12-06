import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoUnifiedRoleManagementPolicyAuthenticationContextRule} from './deserializeIntoUnifiedRoleManagementPolicyAuthenticationContextRule';
import {UnifiedRoleManagementPolicyAuthenticationContextRuleCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleManagementPolicyAuthenticationContextRuleCollectionResponse(unifiedRoleManagementPolicyAuthenticationContextRuleCollectionResponse: UnifiedRoleManagementPolicyAuthenticationContextRuleCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(unifiedRoleManagementPolicyAuthenticationContextRuleCollectionResponse),
        "value": n => { unifiedRoleManagementPolicyAuthenticationContextRuleCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUnifiedRoleManagementPolicyAuthenticationContextRule) as any ; },
    }
}

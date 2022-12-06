import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoUnifiedRoleManagementPolicyExpirationRule} from './deserializeIntoUnifiedRoleManagementPolicyExpirationRule';
import {UnifiedRoleManagementPolicyExpirationRuleCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleManagementPolicyExpirationRuleCollectionResponse(unifiedRoleManagementPolicyExpirationRuleCollectionResponse: UnifiedRoleManagementPolicyExpirationRuleCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(unifiedRoleManagementPolicyExpirationRuleCollectionResponse),
        "value": n => { unifiedRoleManagementPolicyExpirationRuleCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUnifiedRoleManagementPolicyExpirationRule) as any ; },
    }
}

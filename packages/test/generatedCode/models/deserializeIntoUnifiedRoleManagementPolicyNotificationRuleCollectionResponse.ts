import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoUnifiedRoleManagementPolicyNotificationRule} from './deserializeIntoUnifiedRoleManagementPolicyNotificationRule';
import {UnifiedRoleManagementPolicyNotificationRuleCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleManagementPolicyNotificationRuleCollectionResponse(unifiedRoleManagementPolicyNotificationRuleCollectionResponse: UnifiedRoleManagementPolicyNotificationRuleCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(unifiedRoleManagementPolicyNotificationRuleCollectionResponse),
        "value": n => { unifiedRoleManagementPolicyNotificationRuleCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUnifiedRoleManagementPolicyNotificationRule) as any ; },
    }
}

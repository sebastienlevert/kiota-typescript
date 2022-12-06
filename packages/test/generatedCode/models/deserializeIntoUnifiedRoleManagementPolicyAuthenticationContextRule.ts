import {deserializeIntoUnifiedRoleManagementPolicyRule} from './deserializeIntoUnifiedRoleManagementPolicyRule';
import {UnifiedRoleManagementPolicyAuthenticationContextRule} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleManagementPolicyAuthenticationContextRule(unifiedRoleManagementPolicyAuthenticationContextRule: UnifiedRoleManagementPolicyAuthenticationContextRule | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoUnifiedRoleManagementPolicyRule(unifiedRoleManagementPolicyAuthenticationContextRule),
        "claimValue": n => { unifiedRoleManagementPolicyAuthenticationContextRule.claimValue = n.getStringValue() as any ; },
        "isEnabled": n => { unifiedRoleManagementPolicyAuthenticationContextRule.isEnabled = n.getBooleanValue() as any ; },
    }
}

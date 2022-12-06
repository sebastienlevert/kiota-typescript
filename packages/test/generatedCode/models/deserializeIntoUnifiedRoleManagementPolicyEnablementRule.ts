import {deserializeIntoUnifiedRoleManagementPolicyRule} from './deserializeIntoUnifiedRoleManagementPolicyRule';
import {UnifiedRoleManagementPolicyEnablementRule} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleManagementPolicyEnablementRule(unifiedRoleManagementPolicyEnablementRule: UnifiedRoleManagementPolicyEnablementRule | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoUnifiedRoleManagementPolicyRule(unifiedRoleManagementPolicyEnablementRule),
        "enabledRules": n => { unifiedRoleManagementPolicyEnablementRule.enabledRules = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}

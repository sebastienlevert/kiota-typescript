import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoUnifiedRoleManagementPolicyRuleTarget} from './deserializeIntoUnifiedRoleManagementPolicyRuleTarget';
import {UnifiedRoleManagementPolicyRule} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleManagementPolicyRule(unifiedRoleManagementPolicyRule: UnifiedRoleManagementPolicyRule | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(unifiedRoleManagementPolicyRule),
        "target": n => { unifiedRoleManagementPolicyRule.target = n.getObject(deserializeIntoUnifiedRoleManagementPolicyRuleTarget) as any ; },
    }
}

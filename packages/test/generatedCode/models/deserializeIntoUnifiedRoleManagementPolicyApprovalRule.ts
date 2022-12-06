import {deserializeIntoApprovalSettings} from './deserializeIntoApprovalSettings';
import {deserializeIntoUnifiedRoleManagementPolicyRule} from './deserializeIntoUnifiedRoleManagementPolicyRule';
import {UnifiedRoleManagementPolicyApprovalRule} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleManagementPolicyApprovalRule(unifiedRoleManagementPolicyApprovalRule: UnifiedRoleManagementPolicyApprovalRule | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoUnifiedRoleManagementPolicyRule(unifiedRoleManagementPolicyApprovalRule),
        "setting": n => { unifiedRoleManagementPolicyApprovalRule.setting = n.getObject(deserializeIntoApprovalSettings) as any ; },
    }
}

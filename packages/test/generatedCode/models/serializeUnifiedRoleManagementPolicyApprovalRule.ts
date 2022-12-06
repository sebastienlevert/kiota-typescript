import {UnifiedRoleManagementPolicyApprovalRule} from './index';
import {serializeApprovalSettings} from './serializeApprovalSettings';
import {serializeUnifiedRoleManagementPolicyRule} from './serializeUnifiedRoleManagementPolicyRule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleManagementPolicyApprovalRule(writer: SerializationWriter, unifiedRoleManagementPolicyApprovalRule: UnifiedRoleManagementPolicyApprovalRule | undefined = {}) : void {
        serializeUnifiedRoleManagementPolicyRule(writer, unifiedRoleManagementPolicyApprovalRule)
            writer.writeObjectValueFromMethod("setting", unifiedRoleManagementPolicyApprovalRule.setting as any, serializeApprovalSettings);
}

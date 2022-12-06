import {UnifiedRoleManagementPolicyRule} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeUnifiedRoleManagementPolicyRuleTarget} from './serializeUnifiedRoleManagementPolicyRuleTarget';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleManagementPolicyRule(writer: SerializationWriter, unifiedRoleManagementPolicyRule: UnifiedRoleManagementPolicyRule | undefined = {}) : void {
        serializeEntity(writer, unifiedRoleManagementPolicyRule)
            writer.writeObjectValueFromMethod("target", unifiedRoleManagementPolicyRule.target as any, serializeUnifiedRoleManagementPolicyRuleTarget);
}

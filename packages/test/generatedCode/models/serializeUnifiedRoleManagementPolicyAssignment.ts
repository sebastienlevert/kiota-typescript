import {UnifiedRoleManagementPolicyAssignment} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeUnifiedRoleManagementPolicy} from './serializeUnifiedRoleManagementPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleManagementPolicyAssignment(writer: SerializationWriter, unifiedRoleManagementPolicyAssignment: UnifiedRoleManagementPolicyAssignment | undefined = {}) : void {
        serializeEntity(writer, unifiedRoleManagementPolicyAssignment)
            writer.writeObjectValueFromMethod("policy", unifiedRoleManagementPolicyAssignment.policy as any, serializeUnifiedRoleManagementPolicy);
            writer.writeStringValue("policyId", unifiedRoleManagementPolicyAssignment.policyId);
            writer.writeStringValue("roleDefinitionId", unifiedRoleManagementPolicyAssignment.roleDefinitionId);
            writer.writeStringValue("scopeId", unifiedRoleManagementPolicyAssignment.scopeId);
            writer.writeStringValue("scopeType", unifiedRoleManagementPolicyAssignment.scopeType);
}

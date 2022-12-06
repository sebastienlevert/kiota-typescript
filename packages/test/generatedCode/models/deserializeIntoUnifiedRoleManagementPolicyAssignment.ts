import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoUnifiedRoleManagementPolicy} from './deserializeIntoUnifiedRoleManagementPolicy';
import {UnifiedRoleManagementPolicyAssignment} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleManagementPolicyAssignment(unifiedRoleManagementPolicyAssignment: UnifiedRoleManagementPolicyAssignment | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(unifiedRoleManagementPolicyAssignment),
        "policy": n => { unifiedRoleManagementPolicyAssignment.policy = n.getObject(deserializeIntoUnifiedRoleManagementPolicy) as any ; },
        "policyId": n => { unifiedRoleManagementPolicyAssignment.policyId = n.getStringValue() as any ; },
        "roleDefinitionId": n => { unifiedRoleManagementPolicyAssignment.roleDefinitionId = n.getStringValue() as any ; },
        "scopeId": n => { unifiedRoleManagementPolicyAssignment.scopeId = n.getStringValue() as any ; },
        "scopeType": n => { unifiedRoleManagementPolicyAssignment.scopeType = n.getStringValue() as any ; },
    }
}

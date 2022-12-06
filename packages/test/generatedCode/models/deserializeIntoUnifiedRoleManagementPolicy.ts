import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoIdentity} from './deserializeIntoIdentity';
import {deserializeIntoUnifiedRoleManagementPolicyRule} from './deserializeIntoUnifiedRoleManagementPolicyRule';
import {UnifiedRoleManagementPolicy} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleManagementPolicy(unifiedRoleManagementPolicy: UnifiedRoleManagementPolicy | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(unifiedRoleManagementPolicy),
        "description": n => { unifiedRoleManagementPolicy.description = n.getStringValue() as any ; },
        "displayName": n => { unifiedRoleManagementPolicy.displayName = n.getStringValue() as any ; },
        "effectiveRules": n => { unifiedRoleManagementPolicy.effectiveRules = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUnifiedRoleManagementPolicyRule) as any ; },
        "isOrganizationDefault": n => { unifiedRoleManagementPolicy.isOrganizationDefault = n.getBooleanValue() as any ; },
        "lastModifiedBy": n => { unifiedRoleManagementPolicy.lastModifiedBy = n.getObject(deserializeIntoIdentity) as any ; },
        "lastModifiedDateTime": n => { unifiedRoleManagementPolicy.lastModifiedDateTime = n.getDateValue() as any ; },
        "rules": n => { unifiedRoleManagementPolicy.rules = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUnifiedRoleManagementPolicyRule) as any ; },
        "scopeId": n => { unifiedRoleManagementPolicy.scopeId = n.getStringValue() as any ; },
        "scopeType": n => { unifiedRoleManagementPolicy.scopeType = n.getStringValue() as any ; },
    }
}

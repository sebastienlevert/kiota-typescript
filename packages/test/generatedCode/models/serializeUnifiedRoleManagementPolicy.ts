import {UnifiedRoleManagementPolicy} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeIdentity} from './serializeIdentity';
import {serializeUnifiedRoleManagementPolicyRule} from './serializeUnifiedRoleManagementPolicyRule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleManagementPolicy(writer: SerializationWriter, unifiedRoleManagementPolicy: UnifiedRoleManagementPolicy | undefined = {}) : void {
        serializeEntity(writer, unifiedRoleManagementPolicy)
            writer.writeStringValue("description", unifiedRoleManagementPolicy.description);
            writer.writeStringValue("displayName", unifiedRoleManagementPolicy.displayName);
            writer.writeCollectionOfObjectValuesFromMethod("effectiveRules", unifiedRoleManagementPolicy.effectiveRules as any, serializeUnifiedRoleManagementPolicyRule);
            writer.writeBooleanValue("isOrganizationDefault", unifiedRoleManagementPolicy.isOrganizationDefault);
            writer.writeObjectValueFromMethod("lastModifiedBy", unifiedRoleManagementPolicy.lastModifiedBy as any, serializeIdentity);
            writer.writeDateValue("lastModifiedDateTime", unifiedRoleManagementPolicy.lastModifiedDateTime);
            writer.writeCollectionOfObjectValuesFromMethod("rules", unifiedRoleManagementPolicy.rules as any, serializeUnifiedRoleManagementPolicyRule);
            writer.writeStringValue("scopeId", unifiedRoleManagementPolicy.scopeId);
            writer.writeStringValue("scopeType", unifiedRoleManagementPolicy.scopeType);
}

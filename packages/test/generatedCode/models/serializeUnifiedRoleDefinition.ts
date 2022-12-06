import {UnifiedRoleDefinition} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeUnifiedRolePermission} from './serializeUnifiedRolePermission';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleDefinition(writer: SerializationWriter, unifiedRoleDefinition: UnifiedRoleDefinition | undefined = {}) : void {
        serializeEntity(writer, unifiedRoleDefinition)
            writer.writeStringValue("description", unifiedRoleDefinition.description);
            writer.writeStringValue("displayName", unifiedRoleDefinition.displayName);
            writer.writeCollectionOfObjectValuesFromMethod("inheritsPermissionsFrom", unifiedRoleDefinition.inheritsPermissionsFrom as any, serializeUnifiedRoleDefinition);
            writer.writeBooleanValue("isBuiltIn", unifiedRoleDefinition.isBuiltIn);
            writer.writeBooleanValue("isEnabled", unifiedRoleDefinition.isEnabled);
            writer.writeCollectionOfPrimitiveValues<string>("resourceScopes", unifiedRoleDefinition.resourceScopes);
            writer.writeCollectionOfObjectValuesFromMethod("rolePermissions", unifiedRoleDefinition.rolePermissions as any, serializeUnifiedRolePermission);
            writer.writeStringValue("templateId", unifiedRoleDefinition.templateId);
            writer.writeStringValue("version", unifiedRoleDefinition.version);
}

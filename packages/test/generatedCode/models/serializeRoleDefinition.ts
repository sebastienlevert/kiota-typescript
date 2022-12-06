import {RoleDefinition} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeRoleAssignment} from './serializeRoleAssignment';
import {serializeRolePermission} from './serializeRolePermission';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRoleDefinition(writer: SerializationWriter, roleDefinition: RoleDefinition | undefined = {}) : void {
        serializeEntity(writer, roleDefinition)
            writer.writeStringValue("description", roleDefinition.description);
            writer.writeStringValue("displayName", roleDefinition.displayName);
            writer.writeBooleanValue("isBuiltIn", roleDefinition.isBuiltIn);
            writer.writeCollectionOfObjectValuesFromMethod("roleAssignments", roleDefinition.roleAssignments as any, serializeRoleAssignment);
            writer.writeCollectionOfObjectValuesFromMethod("rolePermissions", roleDefinition.rolePermissions as any, serializeRolePermission);
}

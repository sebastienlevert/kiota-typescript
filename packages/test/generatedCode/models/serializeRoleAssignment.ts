import {RoleAssignment} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeRoleDefinition} from './serializeRoleDefinition';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRoleAssignment(writer: SerializationWriter, roleAssignment: RoleAssignment | undefined = {}) : void {
        serializeEntity(writer, roleAssignment)
            writer.writeStringValue("description", roleAssignment.description);
            writer.writeStringValue("displayName", roleAssignment.displayName);
            writer.writeCollectionOfPrimitiveValues<string>("resourceScopes", roleAssignment.resourceScopes);
            writer.writeObjectValueFromMethod("roleDefinition", roleAssignment.roleDefinition as any, serializeRoleDefinition);
}

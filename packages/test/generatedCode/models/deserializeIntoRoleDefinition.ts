import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoRoleAssignment} from './deserializeIntoRoleAssignment';
import {deserializeIntoRolePermission} from './deserializeIntoRolePermission';
import {RoleDefinition} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRoleDefinition(roleDefinition: RoleDefinition | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(roleDefinition),
        "description": n => { roleDefinition.description = n.getStringValue() as any ; },
        "displayName": n => { roleDefinition.displayName = n.getStringValue() as any ; },
        "isBuiltIn": n => { roleDefinition.isBuiltIn = n.getBooleanValue() as any ; },
        "roleAssignments": n => { roleDefinition.roleAssignments = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRoleAssignment) as any ; },
        "rolePermissions": n => { roleDefinition.rolePermissions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRolePermission) as any ; },
    }
}

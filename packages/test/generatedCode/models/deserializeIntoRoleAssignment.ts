import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoRoleDefinition} from './deserializeIntoRoleDefinition';
import {RoleAssignment} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRoleAssignment(roleAssignment: RoleAssignment | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(roleAssignment),
        "description": n => { roleAssignment.description = n.getStringValue() as any ; },
        "displayName": n => { roleAssignment.displayName = n.getStringValue() as any ; },
        "resourceScopes": n => { roleAssignment.resourceScopes = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "roleDefinition": n => { roleAssignment.roleDefinition = n.getObject(deserializeIntoRoleDefinition) as any ; },
    }
}

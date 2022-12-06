import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoUnifiedRolePermission} from './deserializeIntoUnifiedRolePermission';
import {UnifiedRoleDefinition} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleDefinition(unifiedRoleDefinition: UnifiedRoleDefinition | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(unifiedRoleDefinition),
        "description": n => { unifiedRoleDefinition.description = n.getStringValue() as any ; },
        "displayName": n => { unifiedRoleDefinition.displayName = n.getStringValue() as any ; },
        "inheritsPermissionsFrom": n => { unifiedRoleDefinition.inheritsPermissionsFrom = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUnifiedRoleDefinition) as any ; },
        "isBuiltIn": n => { unifiedRoleDefinition.isBuiltIn = n.getBooleanValue() as any ; },
        "isEnabled": n => { unifiedRoleDefinition.isEnabled = n.getBooleanValue() as any ; },
        "resourceScopes": n => { unifiedRoleDefinition.resourceScopes = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "rolePermissions": n => { unifiedRoleDefinition.rolePermissions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUnifiedRolePermission) as any ; },
        "templateId": n => { unifiedRoleDefinition.templateId = n.getStringValue() as any ; },
        "version": n => { unifiedRoleDefinition.version = n.getStringValue() as any ; },
    }
}

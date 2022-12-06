import {deserializeIntoAppScope} from './deserializeIntoAppScope';
import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoUnifiedRoleDefinition} from './deserializeIntoUnifiedRoleDefinition';
import {UnifiedRoleAssignment} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleAssignment(unifiedRoleAssignment: UnifiedRoleAssignment | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(unifiedRoleAssignment),
        "appScope": n => { unifiedRoleAssignment.appScope = n.getObject(deserializeIntoAppScope) as any ; },
        "appScopeId": n => { unifiedRoleAssignment.appScopeId = n.getStringValue() as any ; },
        "condition": n => { unifiedRoleAssignment.condition = n.getStringValue() as any ; },
        "directoryScope": n => { unifiedRoleAssignment.directoryScope = n.getObject(deserializeIntoDirectoryObject) as any ; },
        "directoryScopeId": n => { unifiedRoleAssignment.directoryScopeId = n.getStringValue() as any ; },
        "principal": n => { unifiedRoleAssignment.principal = n.getObject(deserializeIntoDirectoryObject) as any ; },
        "principalId": n => { unifiedRoleAssignment.principalId = n.getStringValue() as any ; },
        "roleDefinition": n => { unifiedRoleAssignment.roleDefinition = n.getObject(deserializeIntoUnifiedRoleDefinition) as any ; },
        "roleDefinitionId": n => { unifiedRoleAssignment.roleDefinitionId = n.getStringValue() as any ; },
    }
}

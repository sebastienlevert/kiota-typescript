import {deserializeIntoAppScope} from './deserializeIntoAppScope';
import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoUnifiedRoleDefinition} from './deserializeIntoUnifiedRoleDefinition';
import {UnifiedRoleScheduleInstanceBase} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleScheduleInstanceBase(unifiedRoleScheduleInstanceBase: UnifiedRoleScheduleInstanceBase | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(unifiedRoleScheduleInstanceBase),
        "appScope": n => { unifiedRoleScheduleInstanceBase.appScope = n.getObject(deserializeIntoAppScope) as any ; },
        "appScopeId": n => { unifiedRoleScheduleInstanceBase.appScopeId = n.getStringValue() as any ; },
        "directoryScope": n => { unifiedRoleScheduleInstanceBase.directoryScope = n.getObject(deserializeIntoDirectoryObject) as any ; },
        "directoryScopeId": n => { unifiedRoleScheduleInstanceBase.directoryScopeId = n.getStringValue() as any ; },
        "principal": n => { unifiedRoleScheduleInstanceBase.principal = n.getObject(deserializeIntoDirectoryObject) as any ; },
        "principalId": n => { unifiedRoleScheduleInstanceBase.principalId = n.getStringValue() as any ; },
        "roleDefinition": n => { unifiedRoleScheduleInstanceBase.roleDefinition = n.getObject(deserializeIntoUnifiedRoleDefinition) as any ; },
        "roleDefinitionId": n => { unifiedRoleScheduleInstanceBase.roleDefinitionId = n.getStringValue() as any ; },
    }
}

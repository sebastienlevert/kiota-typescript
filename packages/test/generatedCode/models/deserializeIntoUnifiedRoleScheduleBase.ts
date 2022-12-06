import {deserializeIntoAppScope} from './deserializeIntoAppScope';
import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoUnifiedRoleDefinition} from './deserializeIntoUnifiedRoleDefinition';
import {UnifiedRoleScheduleBase} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleScheduleBase(unifiedRoleScheduleBase: UnifiedRoleScheduleBase | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(unifiedRoleScheduleBase),
        "appScope": n => { unifiedRoleScheduleBase.appScope = n.getObject(deserializeIntoAppScope) as any ; },
        "appScopeId": n => { unifiedRoleScheduleBase.appScopeId = n.getStringValue() as any ; },
        "createdDateTime": n => { unifiedRoleScheduleBase.createdDateTime = n.getDateValue() as any ; },
        "createdUsing": n => { unifiedRoleScheduleBase.createdUsing = n.getStringValue() as any ; },
        "directoryScope": n => { unifiedRoleScheduleBase.directoryScope = n.getObject(deserializeIntoDirectoryObject) as any ; },
        "directoryScopeId": n => { unifiedRoleScheduleBase.directoryScopeId = n.getStringValue() as any ; },
        "modifiedDateTime": n => { unifiedRoleScheduleBase.modifiedDateTime = n.getDateValue() as any ; },
        "principal": n => { unifiedRoleScheduleBase.principal = n.getObject(deserializeIntoDirectoryObject) as any ; },
        "principalId": n => { unifiedRoleScheduleBase.principalId = n.getStringValue() as any ; },
        "roleDefinition": n => { unifiedRoleScheduleBase.roleDefinition = n.getObject(deserializeIntoUnifiedRoleDefinition) as any ; },
        "roleDefinitionId": n => { unifiedRoleScheduleBase.roleDefinitionId = n.getStringValue() as any ; },
        "status": n => { unifiedRoleScheduleBase.status = n.getStringValue() as any ; },
    }
}

import {UnifiedRoleScheduleInstanceBase} from './index';
import {serializeAppScope} from './serializeAppScope';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeEntity} from './serializeEntity';
import {serializeUnifiedRoleDefinition} from './serializeUnifiedRoleDefinition';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleScheduleInstanceBase(writer: SerializationWriter, unifiedRoleScheduleInstanceBase: UnifiedRoleScheduleInstanceBase | undefined = {}) : void {
        serializeEntity(writer, unifiedRoleScheduleInstanceBase)
            writer.writeObjectValueFromMethod("appScope", unifiedRoleScheduleInstanceBase.appScope as any, serializeAppScope);
            writer.writeStringValue("appScopeId", unifiedRoleScheduleInstanceBase.appScopeId);
            writer.writeObjectValueFromMethod("directoryScope", unifiedRoleScheduleInstanceBase.directoryScope as any, serializeDirectoryObject);
            writer.writeStringValue("directoryScopeId", unifiedRoleScheduleInstanceBase.directoryScopeId);
            writer.writeObjectValueFromMethod("principal", unifiedRoleScheduleInstanceBase.principal as any, serializeDirectoryObject);
            writer.writeStringValue("principalId", unifiedRoleScheduleInstanceBase.principalId);
            writer.writeObjectValueFromMethod("roleDefinition", unifiedRoleScheduleInstanceBase.roleDefinition as any, serializeUnifiedRoleDefinition);
            writer.writeStringValue("roleDefinitionId", unifiedRoleScheduleInstanceBase.roleDefinitionId);
}

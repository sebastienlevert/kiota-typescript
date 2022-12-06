import {UnifiedRoleScheduleBase} from './index';
import {serializeAppScope} from './serializeAppScope';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeEntity} from './serializeEntity';
import {serializeUnifiedRoleDefinition} from './serializeUnifiedRoleDefinition';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleScheduleBase(writer: SerializationWriter, unifiedRoleScheduleBase: UnifiedRoleScheduleBase | undefined = {}) : void {
        serializeEntity(writer, unifiedRoleScheduleBase)
            writer.writeObjectValueFromMethod("appScope", unifiedRoleScheduleBase.appScope as any, serializeAppScope);
            writer.writeStringValue("appScopeId", unifiedRoleScheduleBase.appScopeId);
            writer.writeDateValue("createdDateTime", unifiedRoleScheduleBase.createdDateTime);
            writer.writeStringValue("createdUsing", unifiedRoleScheduleBase.createdUsing);
            writer.writeObjectValueFromMethod("directoryScope", unifiedRoleScheduleBase.directoryScope as any, serializeDirectoryObject);
            writer.writeStringValue("directoryScopeId", unifiedRoleScheduleBase.directoryScopeId);
            writer.writeDateValue("modifiedDateTime", unifiedRoleScheduleBase.modifiedDateTime);
            writer.writeObjectValueFromMethod("principal", unifiedRoleScheduleBase.principal as any, serializeDirectoryObject);
            writer.writeStringValue("principalId", unifiedRoleScheduleBase.principalId);
            writer.writeObjectValueFromMethod("roleDefinition", unifiedRoleScheduleBase.roleDefinition as any, serializeUnifiedRoleDefinition);
            writer.writeStringValue("roleDefinitionId", unifiedRoleScheduleBase.roleDefinitionId);
            writer.writeStringValue("status", unifiedRoleScheduleBase.status);
}

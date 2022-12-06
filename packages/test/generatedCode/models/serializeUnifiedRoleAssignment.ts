import {UnifiedRoleAssignment} from './index';
import {serializeAppScope} from './serializeAppScope';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeEntity} from './serializeEntity';
import {serializeUnifiedRoleDefinition} from './serializeUnifiedRoleDefinition';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleAssignment(writer: SerializationWriter, unifiedRoleAssignment: UnifiedRoleAssignment | undefined = {}) : void {
        serializeEntity(writer, unifiedRoleAssignment)
            writer.writeObjectValueFromMethod("appScope", unifiedRoleAssignment.appScope as any, serializeAppScope);
            writer.writeStringValue("appScopeId", unifiedRoleAssignment.appScopeId);
            writer.writeStringValue("condition", unifiedRoleAssignment.condition);
            writer.writeObjectValueFromMethod("directoryScope", unifiedRoleAssignment.directoryScope as any, serializeDirectoryObject);
            writer.writeStringValue("directoryScopeId", unifiedRoleAssignment.directoryScopeId);
            writer.writeObjectValueFromMethod("principal", unifiedRoleAssignment.principal as any, serializeDirectoryObject);
            writer.writeStringValue("principalId", unifiedRoleAssignment.principalId);
            writer.writeObjectValueFromMethod("roleDefinition", unifiedRoleAssignment.roleDefinition as any, serializeUnifiedRoleDefinition);
            writer.writeStringValue("roleDefinitionId", unifiedRoleAssignment.roleDefinitionId);
}

import {UnifiedRoleAssignmentScheduleRequest} from './index';
import {serializeAppScope} from './serializeAppScope';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeRequest} from './serializeRequest';
import {serializeRequestSchedule} from './serializeRequestSchedule';
import {serializeTicketInfo} from './serializeTicketInfo';
import {serializeUnifiedRoleAssignmentSchedule} from './serializeUnifiedRoleAssignmentSchedule';
import {serializeUnifiedRoleDefinition} from './serializeUnifiedRoleDefinition';
import {serializeUnifiedRoleEligibilitySchedule} from './serializeUnifiedRoleEligibilitySchedule';
import {UnifiedRoleScheduleRequestActions} from './unifiedRoleScheduleRequestActions';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleAssignmentScheduleRequest(writer: SerializationWriter, unifiedRoleAssignmentScheduleRequest: UnifiedRoleAssignmentScheduleRequest | undefined = {}) : void {
        serializeRequest(writer, unifiedRoleAssignmentScheduleRequest)
            writer.writeEnumValue<UnifiedRoleScheduleRequestActions>("action", unifiedRoleAssignmentScheduleRequest.action);
            writer.writeObjectValueFromMethod("activatedUsing", unifiedRoleAssignmentScheduleRequest.activatedUsing as any, serializeUnifiedRoleEligibilitySchedule);
            writer.writeObjectValueFromMethod("appScope", unifiedRoleAssignmentScheduleRequest.appScope as any, serializeAppScope);
            writer.writeStringValue("appScopeId", unifiedRoleAssignmentScheduleRequest.appScopeId);
            writer.writeObjectValueFromMethod("directoryScope", unifiedRoleAssignmentScheduleRequest.directoryScope as any, serializeDirectoryObject);
            writer.writeStringValue("directoryScopeId", unifiedRoleAssignmentScheduleRequest.directoryScopeId);
            writer.writeBooleanValue("isValidationOnly", unifiedRoleAssignmentScheduleRequest.isValidationOnly);
            writer.writeStringValue("justification", unifiedRoleAssignmentScheduleRequest.justification);
            writer.writeObjectValueFromMethod("principal", unifiedRoleAssignmentScheduleRequest.principal as any, serializeDirectoryObject);
            writer.writeStringValue("principalId", unifiedRoleAssignmentScheduleRequest.principalId);
            writer.writeObjectValueFromMethod("roleDefinition", unifiedRoleAssignmentScheduleRequest.roleDefinition as any, serializeUnifiedRoleDefinition);
            writer.writeStringValue("roleDefinitionId", unifiedRoleAssignmentScheduleRequest.roleDefinitionId);
            writer.writeObjectValueFromMethod("scheduleInfo", unifiedRoleAssignmentScheduleRequest.scheduleInfo as any, serializeRequestSchedule);
            writer.writeObjectValueFromMethod("targetSchedule", unifiedRoleAssignmentScheduleRequest.targetSchedule as any, serializeUnifiedRoleAssignmentSchedule);
            writer.writeStringValue("targetScheduleId", unifiedRoleAssignmentScheduleRequest.targetScheduleId);
            writer.writeObjectValueFromMethod("ticketInfo", unifiedRoleAssignmentScheduleRequest.ticketInfo as any, serializeTicketInfo);
}

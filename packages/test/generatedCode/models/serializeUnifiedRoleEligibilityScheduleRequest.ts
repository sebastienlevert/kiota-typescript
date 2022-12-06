import {UnifiedRoleEligibilityScheduleRequest} from './index';
import {serializeAppScope} from './serializeAppScope';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeRequest} from './serializeRequest';
import {serializeRequestSchedule} from './serializeRequestSchedule';
import {serializeTicketInfo} from './serializeTicketInfo';
import {serializeUnifiedRoleDefinition} from './serializeUnifiedRoleDefinition';
import {serializeUnifiedRoleEligibilitySchedule} from './serializeUnifiedRoleEligibilitySchedule';
import {UnifiedRoleScheduleRequestActions} from './unifiedRoleScheduleRequestActions';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleEligibilityScheduleRequest(writer: SerializationWriter, unifiedRoleEligibilityScheduleRequest: UnifiedRoleEligibilityScheduleRequest | undefined = {}) : void {
        serializeRequest(writer, unifiedRoleEligibilityScheduleRequest)
            writer.writeEnumValue<UnifiedRoleScheduleRequestActions>("action", unifiedRoleEligibilityScheduleRequest.action);
            writer.writeObjectValueFromMethod("appScope", unifiedRoleEligibilityScheduleRequest.appScope as any, serializeAppScope);
            writer.writeStringValue("appScopeId", unifiedRoleEligibilityScheduleRequest.appScopeId);
            writer.writeObjectValueFromMethod("directoryScope", unifiedRoleEligibilityScheduleRequest.directoryScope as any, serializeDirectoryObject);
            writer.writeStringValue("directoryScopeId", unifiedRoleEligibilityScheduleRequest.directoryScopeId);
            writer.writeBooleanValue("isValidationOnly", unifiedRoleEligibilityScheduleRequest.isValidationOnly);
            writer.writeStringValue("justification", unifiedRoleEligibilityScheduleRequest.justification);
            writer.writeObjectValueFromMethod("principal", unifiedRoleEligibilityScheduleRequest.principal as any, serializeDirectoryObject);
            writer.writeStringValue("principalId", unifiedRoleEligibilityScheduleRequest.principalId);
            writer.writeObjectValueFromMethod("roleDefinition", unifiedRoleEligibilityScheduleRequest.roleDefinition as any, serializeUnifiedRoleDefinition);
            writer.writeStringValue("roleDefinitionId", unifiedRoleEligibilityScheduleRequest.roleDefinitionId);
            writer.writeObjectValueFromMethod("scheduleInfo", unifiedRoleEligibilityScheduleRequest.scheduleInfo as any, serializeRequestSchedule);
            writer.writeObjectValueFromMethod("targetSchedule", unifiedRoleEligibilityScheduleRequest.targetSchedule as any, serializeUnifiedRoleEligibilitySchedule);
            writer.writeStringValue("targetScheduleId", unifiedRoleEligibilityScheduleRequest.targetScheduleId);
            writer.writeObjectValueFromMethod("ticketInfo", unifiedRoleEligibilityScheduleRequest.ticketInfo as any, serializeTicketInfo);
}

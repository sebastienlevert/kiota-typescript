import {UnifiedRoleAssignmentScheduleInstance} from './index';
import {serializeUnifiedRoleEligibilityScheduleInstance} from './serializeUnifiedRoleEligibilityScheduleInstance';
import {serializeUnifiedRoleScheduleInstanceBase} from './serializeUnifiedRoleScheduleInstanceBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleAssignmentScheduleInstance(writer: SerializationWriter, unifiedRoleAssignmentScheduleInstance: UnifiedRoleAssignmentScheduleInstance | undefined = {}) : void {
        serializeUnifiedRoleScheduleInstanceBase(writer, unifiedRoleAssignmentScheduleInstance)
            writer.writeObjectValueFromMethod("activatedUsing", unifiedRoleAssignmentScheduleInstance.activatedUsing as any, serializeUnifiedRoleEligibilityScheduleInstance);
            writer.writeStringValue("assignmentType", unifiedRoleAssignmentScheduleInstance.assignmentType);
            writer.writeDateValue("endDateTime", unifiedRoleAssignmentScheduleInstance.endDateTime);
            writer.writeStringValue("memberType", unifiedRoleAssignmentScheduleInstance.memberType);
            writer.writeStringValue("roleAssignmentOriginId", unifiedRoleAssignmentScheduleInstance.roleAssignmentOriginId);
            writer.writeStringValue("roleAssignmentScheduleId", unifiedRoleAssignmentScheduleInstance.roleAssignmentScheduleId);
            writer.writeDateValue("startDateTime", unifiedRoleAssignmentScheduleInstance.startDateTime);
}

import {UnifiedRoleAssignmentSchedule} from './index';
import {serializeRequestSchedule} from './serializeRequestSchedule';
import {serializeUnifiedRoleEligibilitySchedule} from './serializeUnifiedRoleEligibilitySchedule';
import {serializeUnifiedRoleScheduleBase} from './serializeUnifiedRoleScheduleBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleAssignmentSchedule(writer: SerializationWriter, unifiedRoleAssignmentSchedule: UnifiedRoleAssignmentSchedule | undefined = {}) : void {
        serializeUnifiedRoleScheduleBase(writer, unifiedRoleAssignmentSchedule)
            writer.writeObjectValueFromMethod("activatedUsing", unifiedRoleAssignmentSchedule.activatedUsing as any, serializeUnifiedRoleEligibilitySchedule);
            writer.writeStringValue("assignmentType", unifiedRoleAssignmentSchedule.assignmentType);
            writer.writeStringValue("memberType", unifiedRoleAssignmentSchedule.memberType);
            writer.writeObjectValueFromMethod("scheduleInfo", unifiedRoleAssignmentSchedule.scheduleInfo as any, serializeRequestSchedule);
}

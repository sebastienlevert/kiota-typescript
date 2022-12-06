import {deserializeIntoUnifiedRoleEligibilityScheduleInstance} from './deserializeIntoUnifiedRoleEligibilityScheduleInstance';
import {deserializeIntoUnifiedRoleScheduleInstanceBase} from './deserializeIntoUnifiedRoleScheduleInstanceBase';
import {UnifiedRoleAssignmentScheduleInstance} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleAssignmentScheduleInstance(unifiedRoleAssignmentScheduleInstance: UnifiedRoleAssignmentScheduleInstance | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoUnifiedRoleScheduleInstanceBase(unifiedRoleAssignmentScheduleInstance),
        "activatedUsing": n => { unifiedRoleAssignmentScheduleInstance.activatedUsing = n.getObject(deserializeIntoUnifiedRoleEligibilityScheduleInstance) as any ; },
        "assignmentType": n => { unifiedRoleAssignmentScheduleInstance.assignmentType = n.getStringValue() as any ; },
        "endDateTime": n => { unifiedRoleAssignmentScheduleInstance.endDateTime = n.getDateValue() as any ; },
        "memberType": n => { unifiedRoleAssignmentScheduleInstance.memberType = n.getStringValue() as any ; },
        "roleAssignmentOriginId": n => { unifiedRoleAssignmentScheduleInstance.roleAssignmentOriginId = n.getStringValue() as any ; },
        "roleAssignmentScheduleId": n => { unifiedRoleAssignmentScheduleInstance.roleAssignmentScheduleId = n.getStringValue() as any ; },
        "startDateTime": n => { unifiedRoleAssignmentScheduleInstance.startDateTime = n.getDateValue() as any ; },
    }
}

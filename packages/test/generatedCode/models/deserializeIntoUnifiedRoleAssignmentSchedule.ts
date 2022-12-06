import {deserializeIntoRequestSchedule} from './deserializeIntoRequestSchedule';
import {deserializeIntoUnifiedRoleEligibilitySchedule} from './deserializeIntoUnifiedRoleEligibilitySchedule';
import {deserializeIntoUnifiedRoleScheduleBase} from './deserializeIntoUnifiedRoleScheduleBase';
import {UnifiedRoleAssignmentSchedule} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleAssignmentSchedule(unifiedRoleAssignmentSchedule: UnifiedRoleAssignmentSchedule | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoUnifiedRoleScheduleBase(unifiedRoleAssignmentSchedule),
        "activatedUsing": n => { unifiedRoleAssignmentSchedule.activatedUsing = n.getObject(deserializeIntoUnifiedRoleEligibilitySchedule) as any ; },
        "assignmentType": n => { unifiedRoleAssignmentSchedule.assignmentType = n.getStringValue() as any ; },
        "memberType": n => { unifiedRoleAssignmentSchedule.memberType = n.getStringValue() as any ; },
        "scheduleInfo": n => { unifiedRoleAssignmentSchedule.scheduleInfo = n.getObject(deserializeIntoRequestSchedule) as any ; },
    }
}

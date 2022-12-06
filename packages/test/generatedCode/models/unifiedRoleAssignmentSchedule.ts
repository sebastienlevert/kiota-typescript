import {RequestSchedule, UnifiedRoleEligibilitySchedule, UnifiedRoleScheduleBase} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleAssignmentSchedule extends Partial<Parsable>, UnifiedRoleScheduleBase {
    /** If the request is from an eligible administrator to activate a role, this parameter will show the related eligible assignment for that activation. Otherwise, it is null. Supports $expand. */
    activatedUsing?: UnifiedRoleEligibilitySchedule;
    /** Type of the assignment which can either be Assigned or Activated. Supports $filter (eq, ne). */
    assignmentType?: string;
    /** How the assignments is inherited. It can either be Inherited, Direct, or Group. It can further imply whether the unifiedRoleAssignmentSchedule can be managed by the caller. Supports $filter (eq, ne). */
    memberType?: string;
    /** The period of the role assignment. It can represent a single occurrence or multiple recurrences. */
    scheduleInfo?: RequestSchedule;
}

import {UnifiedRoleScheduleInstanceBase} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleEligibilityScheduleInstance extends Partial<Parsable>, UnifiedRoleScheduleInstanceBase {
    /** The end date of the schedule instance. */
    endDateTime?: Date;
    /** How the role eligibility is inherited. It can either be Inherited, Direct, or Group. It can further imply whether the unifiedRoleEligibilitySchedule can be managed by the caller. Supports $filter (eq, ne). */
    memberType?: string;
    /** The identifier of the unifiedRoleEligibilitySchedule object from which this instance was created. Supports $filter (eq, ne). */
    roleEligibilityScheduleId?: string;
    /** When this instance starts. */
    startDateTime?: Date;
}

import {Entity, UnifiedRoleAssignment, UnifiedRoleAssignmentSchedule, UnifiedRoleAssignmentScheduleInstance, UnifiedRoleAssignmentScheduleRequest, UnifiedRoleDefinition, UnifiedRoleEligibilitySchedule, UnifiedRoleEligibilityScheduleInstance, UnifiedRoleEligibilityScheduleRequest} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RbacApplication extends Entity, Partial<Parsable> {
    /** Resource to grant access to users or groups. */
    roleAssignments?: UnifiedRoleAssignment[];
    /** Instances for active role assignments. */
    roleAssignmentScheduleInstances?: UnifiedRoleAssignmentScheduleInstance[];
    /** Requests for active role assignments to principals through PIM. */
    roleAssignmentScheduleRequests?: UnifiedRoleAssignmentScheduleRequest[];
    /** Schedules for active role assignment operations. */
    roleAssignmentSchedules?: UnifiedRoleAssignmentSchedule[];
    /** Resource representing the roles allowed by RBAC providers and the permissions assigned to the roles. */
    roleDefinitions?: UnifiedRoleDefinition[];
    /** Instances for role eligibility requests. */
    roleEligibilityScheduleInstances?: UnifiedRoleEligibilityScheduleInstance[];
    /** Requests for role eligibilities for principals through PIM. */
    roleEligibilityScheduleRequests?: UnifiedRoleEligibilityScheduleRequest[];
    /** Schedules for role eligibility operations. */
    roleEligibilitySchedules?: UnifiedRoleEligibilitySchedule[];
}

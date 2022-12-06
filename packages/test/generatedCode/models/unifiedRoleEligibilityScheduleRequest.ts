import {AppScope, DirectoryObject, Request, RequestSchedule, TicketInfo, UnifiedRoleDefinition, UnifiedRoleEligibilitySchedule} from './index';
import {UnifiedRoleScheduleRequestActions} from './unifiedRoleScheduleRequestActions';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleEligibilityScheduleRequest extends Partial<Parsable>, Request {
    /** Represents the type of operation on the role eligibility request. The possible values are: adminAssign, adminUpdate, adminRemove, selfActivate, selfDeactivate, adminExtend, adminRenew, selfExtend, selfRenew, unknownFutureValue. adminAssign: For administrators to assign eligible roles to principals.adminRemove: For administrators to remove eligible roles from principals. adminUpdate: For administrators to change existing role eligibilities.adminExtend: For administrators to extend expiring role eligibilities.adminRenew: For administrators to renew expired eligibilities.selfActivate: For users to activate their assignments.selfDeactivate: For users to deactivate their active assignments.selfExtend: For users to request to extend their expiring assignments.selfRenew: For users to request to renew their expired assignments. */
    action?: UnifiedRoleScheduleRequestActions;
    /** Read-only property with details of the app-specific scope when the role eligibility is scoped to an app. Nullable. Supports $expand. */
    appScope?: AppScope;
    /** Identifier of the app-specific scope when the role eligibility is scoped to an app. The scope of a role eligibility determines the set of resources for which the principal is eligible to access. App scopes are scopes that are defined and understood by this application only. Use / for tenant-wide app scopes. Use directoryScopeId to limit the scope to particular directory objects, for example, administrative units. Supports $filter (eq, ne, and on null values). */
    appScopeId?: string;
    /** The directory object that is the scope of the role eligibility. Read-only. Supports $expand. */
    directoryScope?: DirectoryObject;
    /** Identifier of the directory object representing the scope of the role eligibility. The scope of a role eligibility determines the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the directory that are understood by multiple applications. Use / for tenant-wide scope. Use appScopeId to limit the scope to an application only. Supports $filter (eq, ne, and on null values). */
    directoryScopeId?: string;
    /** Determines whether the call is a validation or an actual call. Only set this property if you want to check whether an activation is subject to additional rules like MFA before actually submitting the request. */
    isValidationOnly?: boolean;
    /** A message provided by users and administrators when create they create the unifiedRoleEligibilityScheduleRequest object. */
    justification?: string;
    /** The principal that's getting a role eligibility through the request. Supports $expand. */
    principal?: DirectoryObject;
    /** Identifier of the principal that has been granted the role eligibility. Can be a user or a role-assignable group. You can grant only active assignments service principals.Supports $filter (eq, ne). */
    principalId?: string;
    /** Detailed information for the unifiedRoleDefinition object that is referenced through the roleDefinitionId property. Supports $expand. */
    roleDefinition?: UnifiedRoleDefinition;
    /** Identifier of the unifiedRoleDefinition object that is being assigned to the principal. Supports $filter (eq, ne). */
    roleDefinitionId?: string;
    /** The period of the role eligibility. Recurring schedules are currently unsupported. */
    scheduleInfo?: RequestSchedule;
    /** The schedule for a role eligibility that is referenced through the targetScheduleId property. Supports $expand. */
    targetSchedule?: UnifiedRoleEligibilitySchedule;
    /** Identifier of the schedule object that's linked to the eligibility request. Supports $filter (eq, ne). */
    targetScheduleId?: string;
    /** Ticket details linked to the role eligibility request including details of the ticket number and ticket system. Optional. */
    ticketInfo?: TicketInfo;
}

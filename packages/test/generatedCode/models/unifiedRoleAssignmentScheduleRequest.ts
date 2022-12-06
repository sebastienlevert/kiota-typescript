import {AppScope, DirectoryObject, Request, RequestSchedule, TicketInfo, UnifiedRoleAssignmentSchedule, UnifiedRoleDefinition, UnifiedRoleEligibilitySchedule} from './index';
import {UnifiedRoleScheduleRequestActions} from './unifiedRoleScheduleRequestActions';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleAssignmentScheduleRequest extends Partial<Parsable>, Request {
    /** Represents the type of the operation on the role assignment request. The possible values are: adminAssign, adminUpdate, adminRemove, selfActivate, selfDeactivate, adminExtend, adminRenew, selfExtend, selfRenew, unknownFutureValue. adminAssign: For administrators to assign roles to principals.adminRemove: For administrators to remove principals from roles. adminUpdate: For administrators to change existing role assignments.adminExtend: For administrators to extend expiring assignments.adminRenew: For administrators to renew expired assignments.selfActivate: For principals to activate their assignments.selfDeactivate: For principals to deactivate their active assignments.selfExtend: For principals to request to extend their expiring assignments.selfRenew: For principals to request to renew their expired assignments. */
    action?: UnifiedRoleScheduleRequestActions;
    /** If the request is from an eligible administrator to activate a role, this parameter will show the related eligible assignment for that activation. Otherwise, it's null. Supports $expand. */
    activatedUsing?: UnifiedRoleEligibilitySchedule;
    /** Read-only property with details of the app-specific scope when the assignment is scoped to an app. Nullable. Supports $expand. */
    appScope?: AppScope;
    /** Identifier of the app-specific scope when the assignment is scoped to an app. The scope of an assignment determines the set of resources for which the principal has been granted access. App scopes are scopes that are defined and understood by this application only. Use / for tenant-wide app scopes. Use directoryScopeId to limit the scope to particular directory objects, for example, administrative units. Supports $filter (eq, ne, and on null values). */
    appScopeId?: string;
    /** The directory object that is the scope of the assignment. Read-only. Supports $expand. */
    directoryScope?: DirectoryObject;
    /** Identifier of the directory object representing the scope of the assignment. The scope of an assignment determines the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the directory that are understood by multiple applications. Use / for tenant-wide scope. Use appScopeId to limit the scope to an application only. Supports $filter (eq, ne, and on null values). */
    directoryScopeId?: string;
    /** Determines whether the call is a validation or an actual call. Only set this property if you want to check whether an activation is subject to additional rules like MFA before actually submitting the request. */
    isValidationOnly?: boolean;
    /** A message provided by users and administrators when create they create the unifiedRoleAssignmentScheduleRequest object. */
    justification?: string;
    /** The principal that's getting a role assignment through the request. Supports $expand. */
    principal?: DirectoryObject;
    /** Identifier of the principal that has been granted the assignment. Can be a user, role-assignable group, or a service principal. Supports $filter (eq, ne). */
    principalId?: string;
    /** Detailed information for the unifiedRoleDefinition object that is referenced through the roleDefinitionId property. Supports $expand. */
    roleDefinition?: UnifiedRoleDefinition;
    /** Identifier of the unifiedRoleDefinition object that is being assigned to the principal. Supports $filter (eq, ne). */
    roleDefinitionId?: string;
    /** The period of the role assignment. Recurring schedules are currently unsupported. */
    scheduleInfo?: RequestSchedule;
    /** The schedule for an eligible role assignment that is referenced through the targetScheduleId property. Supports $expand. */
    targetSchedule?: UnifiedRoleAssignmentSchedule;
    /** Identifier of the schedule object that's linked to the assignment request. Supports $filter (eq, ne). */
    targetScheduleId?: string;
    /** Ticket details linked to the role assignment request including details of the ticket number and ticket system. */
    ticketInfo?: TicketInfo;
}

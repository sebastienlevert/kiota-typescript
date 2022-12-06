import {AuditActivityInitiator, Entity, KeyValue, TargetResource} from './index';
import {OperationResult} from './operationResult';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DirectoryAudit extends Entity, Partial<Parsable> {
    /** Indicates the date and time the activity was performed. The Timestamp type is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    activityDateTime?: Date;
    /** Indicates the activity name or the operation name (examples: 'Create User' and 'Add member to group'). For full list, see Azure AD activity list. */
    activityDisplayName?: string;
    /** Indicates additional details on the activity. */
    additionalDetails?: KeyValue[];
    /** Indicates which resource category that's targeted by the activity. For example: UserManagement, GroupManagement, ApplicationManagement, RoleManagement. */
    category?: string;
    /** Indicates a unique ID that helps correlate activities that span across various services. Can be used to trace logs across services. */
    correlationId?: string;
    /** The initiatedBy property */
    initiatedBy?: AuditActivityInitiator;
    /** Indicates information on which service initiated the activity (For example: Self-service Password Management, Core Directory, B2C, Invited Users, Microsoft Identity Manager, Privileged Identity Management. */
    loggedByService?: string;
    /** Indicates the type of operation that was performed. The possible values include but are not limited to the following: Add, Assign, Update, Unassign, and Delete. */
    operationType?: string;
    /** Indicates the result of the activity. Possible values are: success, failure, timeout, unknownFutureValue. */
    result?: OperationResult;
    /** Indicates the reason for failure if the result is failure or timeout. */
    resultReason?: string;
    /** Indicates information on which resource was changed due to the activity. Target Resource Type can be User, Device, Directory, App, Role, Group, Policy or Other. */
    targetResources?: TargetResource[];
}

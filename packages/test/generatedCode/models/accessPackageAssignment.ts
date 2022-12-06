import {AccessPackageAssignmentState} from './accessPackageAssignmentState';
import {AccessPackage, AccessPackageAssignmentPolicy, AccessPackageSubject, EntitlementManagementSchedule, Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageAssignment extends Entity, Partial<Parsable> {
    /** Read-only. Nullable. Supports $filter (eq) on the id property and $expand query parameters. */
    accessPackage?: AccessPackage;
    /** Read-only. Supports $filter (eq) on the id property and $expand query parameters. */
    assignmentPolicy?: AccessPackageAssignmentPolicy;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    expiredDateTime?: Date;
    /** When the access assignment is to be in place. Read-only. */
    schedule?: EntitlementManagementSchedule;
    /** The state of the access package assignment. The possible values are: delivering, partiallyDelivered, delivered, expired, deliveryFailed, unknownFutureValue. Read-only. Supports $filter (eq). */
    state?: AccessPackageAssignmentState;
    /** More information about the assignment lifecycle.  Possible values include Delivering, Delivered, NearExpiry1DayNotificationTriggered, or ExpiredNotificationTriggered.  Read-only. */
    status?: string;
    /** The subject of the access package assignment. Read-only. Nullable. Supports $expand. Supports $filter (eq) on objectId. */
    target?: AccessPackageSubject;
}

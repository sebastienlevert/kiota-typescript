import {AccessPackageRequestState} from './accessPackageRequestState';
import {AccessPackageRequestType} from './accessPackageRequestType';
import {AccessPackage, AccessPackageAssignment, AccessPackageSubject, EntitlementManagementSchedule, Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageAssignmentRequest extends Entity, Partial<Parsable> {
    /** The access package associated with the accessPackageAssignmentRequest. An access package defines the collections of resource roles and the policies for how one or more users can get access to those resources. Read-only. Nullable.  Supports $expand. */
    accessPackage?: AccessPackage;
    /** For a requestType of userAdd or adminAdd, this is an access package assignment requested to be created.  For a requestType of userRemove, adminRemove or systemRemove, this has the id property of an existing assignment to be removed.   Supports $expand. */
    assignment?: AccessPackageAssignment;
    /** The date of the end of processing, either successful or failure, of a request. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    completedDateTime?: Date;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. Supports $filter. */
    createdDateTime?: Date;
    /** The subject who requested or, if a direct assignment, was assigned. Read-only. Nullable. Supports $expand. */
    requestor?: AccessPackageSubject;
    /** The type of the request. The possible values are: notSpecified, userAdd, UserExtend, userUpdate, userRemove, adminAdd, adminUpdate, adminRemove, systemAdd, systemUpdate, systemRemove, onBehalfAdd (not supported), unknownFutureValue. A request from the user themselves would have requestType of userAdd, userUpdate or userRemove. This property cannot be changed once set. */
    requestType?: AccessPackageRequestType;
    /** The range of dates that access is to be assigned to the requestor. This property cannot be changed once set. */
    schedule?: EntitlementManagementSchedule;
    /** The state of the request. The possible values are: submitted, pendingApproval, delivering, delivered, deliveryFailed, denied, scheduled, canceled, partiallyDelivered, unknownFutureValue. Read-only. Supports $filter (eq). */
    state?: AccessPackageRequestState;
    /** More information on the request processing status. Read-only. */
    status?: string;
}

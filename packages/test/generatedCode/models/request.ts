import {Entity, IdentitySet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Request extends Entity, Partial<Parsable> {
    /** The identifier of the approval of the request. */
    approvalId?: string;
    /** The request completion date time. */
    completedDateTime?: Date;
    /** The createdBy property */
    createdBy?: IdentitySet;
    /** The request creation date time. */
    createdDateTime?: Date;
    /** Free text field to define any custom data for the request. Not used. */
    customData?: string;
    /** The status of the request. Not nullable. The possible values are: Canceled, Denied, Failed, Granted, PendingAdminDecision, PendingApproval, PendingProvisioning, PendingScheduleCreation, Provisioned, Revoked, and ScheduleCreated. Not nullable. */
    status?: string;
}

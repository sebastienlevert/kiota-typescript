import {Entity, Initiator, ModifiedProperty, ProvisionedIdentity, ProvisioningServicePrincipal, ProvisioningStatusInfo, ProvisioningStep, ProvisioningSystem} from './index';
import {ProvisioningAction} from './provisioningAction';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ProvisioningObjectSummary extends Entity, Partial<Parsable> {
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    activityDateTime?: Date;
    /** Unique ID of this change in this cycle. */
    changeId?: string;
    /** Unique ID per job iteration. */
    cycleId?: string;
    /** Indicates how long this provisioning action took to finish. Measured in milliseconds. */
    durationInMilliseconds?: number;
    /** Details of who initiated this provisioning. */
    initiatedBy?: Initiator;
    /** The unique ID for the whole provisioning job. */
    jobId?: string;
    /** Details of each property that was modified in this provisioning action on this object. */
    modifiedProperties?: ModifiedProperty[];
    /** Indicates the activity name or the operation name. Possible values are: create, update, delete, stageddelete, disable, other and unknownFutureValue. For a list of activities logged, refer to Azure AD activity list. */
    provisioningAction?: ProvisioningAction;
    /** Details of provisioning status. */
    provisioningStatusInfo?: ProvisioningStatusInfo;
    /** Details of each step in provisioning. */
    provisioningSteps?: ProvisioningStep[];
    /** Represents the service principal used for provisioning. */
    servicePrincipal?: ProvisioningServicePrincipal;
    /** Details of source object being provisioned. */
    sourceIdentity?: ProvisionedIdentity;
    /** Details of source system of the object being provisioned. */
    sourceSystem?: ProvisioningSystem;
    /** Details of target object being provisioned. */
    targetIdentity?: ProvisionedIdentity;
    /** Details of target system of the object being provisioned. */
    targetSystem?: ProvisioningSystem;
    /** Unique Azure AD tenant ID. */
    tenantId?: string;
}

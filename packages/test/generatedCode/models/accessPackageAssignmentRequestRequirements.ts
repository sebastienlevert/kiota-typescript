import {EntitlementManagementSchedule} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageAssignmentRequestRequirements extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Indicates whether the requestor is allowed to set a custom schedule. */
    allowCustomAssignmentSchedule?: boolean;
    /** Indicates whether a request to add must be approved by an approver. */
    isApprovalRequiredForAdd?: boolean;
    /** Indicates whether a request to update must be approved by an approver. */
    isApprovalRequiredForUpdate?: boolean;
    /** The OdataType property */
    odataType?: string;
    /** The description of the policy that the user is trying to request access using. */
    policyDescription?: string;
    /** The display name of the policy that the user is trying to request access using. */
    policyDisplayName?: string;
    /** The identifier of the policy that these requirements are associated with. This identifier can be used when creating a new assignment request. */
    policyId?: string;
    /** Schedule restrictions enforced, if any. */
    schedule?: EntitlementManagementSchedule;
}

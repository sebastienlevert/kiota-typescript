import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface LicenseAssignmentState extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Indicates whether the license is directly-assigned or inherited from a group. If directly-assigned, this field is null; if inherited through a group membership, this field contains the ID of the group. Read-Only. */
    assignedByGroup?: string;
    /** The service plans that are disabled in this assignment. Read-Only. */
    disabledPlans?: string[];
    /** License assignment failure error. If the license is assigned successfully, this field will be Null. Read-Only. The possible values are CountViolation, MutuallyExclusiveViolation, DependencyViolation, ProhibitedInUsageLocationViolation, UniquenessViolation, and Other. For more information on how to identify and resolve license assignment errors see here. */
    error_escaped?: string;
    /** The timestamp when the state of the license assignment was last updated. */
    lastUpdatedDateTime?: Date;
    /** The unique identifier for the SKU. Read-Only. */
    skuId?: string;
    /** Indicate the current state of this assignment. Read-Only. The possible values are Active, ActiveWithError, Disabled, and Error. */
    state?: string;
}

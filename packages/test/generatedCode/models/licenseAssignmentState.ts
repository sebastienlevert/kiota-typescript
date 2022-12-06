import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface LicenseAssignmentState extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The assignedByGroup property */
    assignedByGroup?: string;
    /** The disabledPlans property */
    disabledPlans?: string[];
    /** The error property */
    error_escaped?: string;
    /** The lastUpdatedDateTime property */
    lastUpdatedDateTime?: Date;
    /** The OdataType property */
    odataType?: string;
    /** The skuId property */
    skuId?: string;
    /** The state property */
    state?: string;
}

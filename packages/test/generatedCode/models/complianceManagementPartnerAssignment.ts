import {DeviceAndAppManagementAssignmentTarget} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ComplianceManagementPartnerAssignment extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The OdataType property */
    odataType?: string;
    /** Group assignment target. */
    target?: DeviceAndAppManagementAssignmentTarget;
}

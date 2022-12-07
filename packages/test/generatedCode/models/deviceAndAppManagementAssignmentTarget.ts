import {DeviceAndAppManagementAssignmentFilterType} from './deviceAndAppManagementAssignmentFilterType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceAndAppManagementAssignmentTarget extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The Id of the filter for the target assignment. */
    deviceAndAppManagementAssignmentFilterId?: string;
    /** Represents type of the assignment filter. */
    deviceAndAppManagementAssignmentFilterType?: DeviceAndAppManagementAssignmentFilterType;
}

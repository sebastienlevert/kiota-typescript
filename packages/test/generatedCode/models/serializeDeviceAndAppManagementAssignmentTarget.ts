import {DeviceAndAppManagementAssignmentFilterType} from './deviceAndAppManagementAssignmentFilterType';
import {DeviceAndAppManagementAssignmentTarget} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceAndAppManagementAssignmentTarget(writer: SerializationWriter, deviceAndAppManagementAssignmentTarget: DeviceAndAppManagementAssignmentTarget | undefined = {}) : void {
            writer.writeStringValue("deviceAndAppManagementAssignmentFilterId", deviceAndAppManagementAssignmentTarget.deviceAndAppManagementAssignmentFilterId);
            writer.writeEnumValue<DeviceAndAppManagementAssignmentFilterType>("deviceAndAppManagementAssignmentFilterType", deviceAndAppManagementAssignmentTarget.deviceAndAppManagementAssignmentFilterType);
}

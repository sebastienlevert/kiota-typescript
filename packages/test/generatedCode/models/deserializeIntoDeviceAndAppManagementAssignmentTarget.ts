import {DeviceAndAppManagementAssignmentFilterType} from './deviceAndAppManagementAssignmentFilterType';
import {DeviceAndAppManagementAssignmentTarget} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceAndAppManagementAssignmentTarget(deviceAndAppManagementAssignmentTarget: DeviceAndAppManagementAssignmentTarget | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "deviceAndAppManagementAssignmentFilterId": n => { deviceAndAppManagementAssignmentTarget.deviceAndAppManagementAssignmentFilterId = n.getStringValue() as any ; },
        "deviceAndAppManagementAssignmentFilterType": n => { deviceAndAppManagementAssignmentTarget.deviceAndAppManagementAssignmentFilterType = n.getEnumValue<DeviceAndAppManagementAssignmentFilterType>(DeviceAndAppManagementAssignmentFilterType) as any ; },
    }
}

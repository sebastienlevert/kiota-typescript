import {deserializeIntoDeviceAndAppManagementAssignmentTarget} from './deserializeIntoDeviceAndAppManagementAssignmentTarget';
import {AllDevicesAssignmentTarget} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAllDevicesAssignmentTarget(allDevicesAssignmentTarget: AllDevicesAssignmentTarget | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceAndAppManagementAssignmentTarget(allDevicesAssignmentTarget),
    }
}

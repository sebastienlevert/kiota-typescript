import {AllDevicesAssignmentTarget} from './index';
import {serializeDeviceAndAppManagementAssignmentTarget} from './serializeDeviceAndAppManagementAssignmentTarget';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAllDevicesAssignmentTarget(writer: SerializationWriter, allDevicesAssignmentTarget: AllDevicesAssignmentTarget | undefined = {}) : void {
        serializeDeviceAndAppManagementAssignmentTarget(writer, allDevicesAssignmentTarget)
}

import {DeviceConfigurationAssignment} from './index';
import {serializeDeviceAndAppManagementAssignmentTarget} from './serializeDeviceAndAppManagementAssignmentTarget';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceConfigurationAssignment(writer: SerializationWriter, deviceConfigurationAssignment: DeviceConfigurationAssignment | undefined = {}) : void {
        serializeEntity(writer, deviceConfigurationAssignment)
            writer.writeObjectValueFromMethod("target", deviceConfigurationAssignment.target as any, serializeDeviceAndAppManagementAssignmentTarget);
}

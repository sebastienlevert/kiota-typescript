import {ManagedDeviceMobileAppConfigurationAssignment} from './index';
import {serializeDeviceAndAppManagementAssignmentTarget} from './serializeDeviceAndAppManagementAssignmentTarget';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedDeviceMobileAppConfigurationAssignment(writer: SerializationWriter, managedDeviceMobileAppConfigurationAssignment: ManagedDeviceMobileAppConfigurationAssignment | undefined = {}) : void {
        serializeEntity(writer, managedDeviceMobileAppConfigurationAssignment)
            writer.writeObjectValueFromMethod("target", managedDeviceMobileAppConfigurationAssignment.target as any, serializeDeviceAndAppManagementAssignmentTarget);
}

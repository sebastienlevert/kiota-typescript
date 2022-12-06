import {DeviceCompliancePolicyAssignment} from './index';
import {serializeDeviceAndAppManagementAssignmentTarget} from './serializeDeviceAndAppManagementAssignmentTarget';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceCompliancePolicyAssignment(writer: SerializationWriter, deviceCompliancePolicyAssignment: DeviceCompliancePolicyAssignment | undefined = {}) : void {
        serializeEntity(writer, deviceCompliancePolicyAssignment)
            writer.writeObjectValueFromMethod("target", deviceCompliancePolicyAssignment.target as any, serializeDeviceAndAppManagementAssignmentTarget);
}

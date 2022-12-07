import {DeviceAndAppManagementAssignmentSource} from './deviceAndAppManagementAssignmentSource';
import {EnrollmentConfigurationAssignment} from './index';
import {serializeDeviceAndAppManagementAssignmentTarget} from './serializeDeviceAndAppManagementAssignmentTarget';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEnrollmentConfigurationAssignment(writer: SerializationWriter, enrollmentConfigurationAssignment: EnrollmentConfigurationAssignment | undefined = {}) : void {
        serializeEntity(writer, enrollmentConfigurationAssignment)
            writer.writeEnumValue<DeviceAndAppManagementAssignmentSource>("source", enrollmentConfigurationAssignment.source);
            writer.writeStringValue("sourceId", enrollmentConfigurationAssignment.sourceId);
            writer.writeObjectValueFromMethod("target", enrollmentConfigurationAssignment.target as any, serializeDeviceAndAppManagementAssignmentTarget);
}

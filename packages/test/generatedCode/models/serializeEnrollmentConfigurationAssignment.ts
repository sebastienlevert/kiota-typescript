import {EnrollmentConfigurationAssignment} from './index';
import {serializeDeviceAndAppManagementAssignmentTarget} from './serializeDeviceAndAppManagementAssignmentTarget';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEnrollmentConfigurationAssignment(writer: SerializationWriter, enrollmentConfigurationAssignment: EnrollmentConfigurationAssignment | undefined = {}) : void {
        serializeEntity(writer, enrollmentConfigurationAssignment)
            writer.writeObjectValueFromMethod("target", enrollmentConfigurationAssignment.target as any, serializeDeviceAndAppManagementAssignmentTarget);
}

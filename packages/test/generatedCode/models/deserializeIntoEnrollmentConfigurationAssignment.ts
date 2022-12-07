import {deserializeIntoDeviceAndAppManagementAssignmentTarget} from './deserializeIntoDeviceAndAppManagementAssignmentTarget';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceAndAppManagementAssignmentSource} from './deviceAndAppManagementAssignmentSource';
import {EnrollmentConfigurationAssignment} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEnrollmentConfigurationAssignment(enrollmentConfigurationAssignment: EnrollmentConfigurationAssignment | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(enrollmentConfigurationAssignment),
        "source": n => { enrollmentConfigurationAssignment.source = n.getEnumValue<DeviceAndAppManagementAssignmentSource>(DeviceAndAppManagementAssignmentSource) as any ; },
        "sourceId": n => { enrollmentConfigurationAssignment.sourceId = n.getStringValue() as any ; },
        "target": n => { enrollmentConfigurationAssignment.target = n.getObject(deserializeIntoDeviceAndAppManagementAssignmentTarget) as any ; },
    }
}

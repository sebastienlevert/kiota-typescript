import {deserializeIntoDeviceAndAppManagementAssignmentTarget} from './deserializeIntoDeviceAndAppManagementAssignmentTarget';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {EnrollmentConfigurationAssignment} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEnrollmentConfigurationAssignment(enrollmentConfigurationAssignment: EnrollmentConfigurationAssignment | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(enrollmentConfigurationAssignment),
        "target": n => { enrollmentConfigurationAssignment.target = n.getObject(deserializeIntoDeviceAndAppManagementAssignmentTarget) as any ; },
    }
}

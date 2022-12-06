import {deserializeIntoDeviceAndAppManagementAssignmentTarget} from './deserializeIntoDeviceAndAppManagementAssignmentTarget';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceCompliancePolicyAssignment} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceCompliancePolicyAssignment(deviceCompliancePolicyAssignment: DeviceCompliancePolicyAssignment | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceCompliancePolicyAssignment),
        "target": n => { deviceCompliancePolicyAssignment.target = n.getObject(deserializeIntoDeviceAndAppManagementAssignmentTarget) as any ; },
    }
}

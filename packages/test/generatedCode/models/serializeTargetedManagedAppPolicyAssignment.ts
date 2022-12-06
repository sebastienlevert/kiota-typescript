import {TargetedManagedAppPolicyAssignment} from './index';
import {serializeDeviceAndAppManagementAssignmentTarget} from './serializeDeviceAndAppManagementAssignmentTarget';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTargetedManagedAppPolicyAssignment(writer: SerializationWriter, targetedManagedAppPolicyAssignment: TargetedManagedAppPolicyAssignment | undefined = {}) : void {
        serializeEntity(writer, targetedManagedAppPolicyAssignment)
            writer.writeObjectValueFromMethod("target", targetedManagedAppPolicyAssignment.target as any, serializeDeviceAndAppManagementAssignmentTarget);
}

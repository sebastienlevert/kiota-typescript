import {ManagedEBookAssignment} from './index';
import {InstallIntent} from './installIntent';
import {serializeDeviceAndAppManagementAssignmentTarget} from './serializeDeviceAndAppManagementAssignmentTarget';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedEBookAssignment(writer: SerializationWriter, managedEBookAssignment: ManagedEBookAssignment | undefined = {}) : void {
        serializeEntity(writer, managedEBookAssignment)
            writer.writeEnumValue<InstallIntent>("installIntent", managedEBookAssignment.installIntent);
            writer.writeObjectValueFromMethod("target", managedEBookAssignment.target as any, serializeDeviceAndAppManagementAssignmentTarget);
}

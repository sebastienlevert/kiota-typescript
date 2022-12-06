import {deserializeIntoDeviceAndAppManagementAssignmentTarget} from './deserializeIntoDeviceAndAppManagementAssignmentTarget';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ManagedEBookAssignment} from './index';
import {InstallIntent} from './installIntent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedEBookAssignment(managedEBookAssignment: ManagedEBookAssignment | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(managedEBookAssignment),
        "installIntent": n => { managedEBookAssignment.installIntent = n.getEnumValue<InstallIntent>(InstallIntent) as any ; },
        "target": n => { managedEBookAssignment.target = n.getObject(deserializeIntoDeviceAndAppManagementAssignmentTarget) as any ; },
    }
}

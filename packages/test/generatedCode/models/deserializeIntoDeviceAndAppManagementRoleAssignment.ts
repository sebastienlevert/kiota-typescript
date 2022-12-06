import {deserializeIntoRoleAssignment} from './deserializeIntoRoleAssignment';
import {DeviceAndAppManagementRoleAssignment} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceAndAppManagementRoleAssignment(deviceAndAppManagementRoleAssignment: DeviceAndAppManagementRoleAssignment | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoRoleAssignment(deviceAndAppManagementRoleAssignment),
        "members": n => { deviceAndAppManagementRoleAssignment.members = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}

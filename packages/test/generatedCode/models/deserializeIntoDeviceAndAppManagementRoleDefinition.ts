import {deserializeIntoRoleDefinition} from './deserializeIntoRoleDefinition';
import {DeviceAndAppManagementRoleDefinition} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceAndAppManagementRoleDefinition(deviceAndAppManagementRoleDefinition: DeviceAndAppManagementRoleDefinition | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoRoleDefinition(deviceAndAppManagementRoleDefinition),
    }
}

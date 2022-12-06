import {DeviceAndAppManagementRoleDefinition} from './index';
import {serializeRoleDefinition} from './serializeRoleDefinition';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceAndAppManagementRoleDefinition(writer: SerializationWriter, deviceAndAppManagementRoleDefinition: DeviceAndAppManagementRoleDefinition | undefined = {}) : void {
        serializeRoleDefinition(writer, deviceAndAppManagementRoleDefinition)
}

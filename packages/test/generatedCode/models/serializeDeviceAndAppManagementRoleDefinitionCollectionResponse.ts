import {DeviceAndAppManagementRoleDefinitionCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceAndAppManagementRoleDefinition} from './serializeDeviceAndAppManagementRoleDefinition';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceAndAppManagementRoleDefinitionCollectionResponse(writer: SerializationWriter, deviceAndAppManagementRoleDefinitionCollectionResponse: DeviceAndAppManagementRoleDefinitionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceAndAppManagementRoleDefinitionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", deviceAndAppManagementRoleDefinitionCollectionResponse.value as any, serializeDeviceAndAppManagementRoleDefinition);
}

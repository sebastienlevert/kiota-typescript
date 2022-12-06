import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDeviceAndAppManagementRoleDefinition} from './deserializeIntoDeviceAndAppManagementRoleDefinition';
import {DeviceAndAppManagementRoleDefinitionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceAndAppManagementRoleDefinitionCollectionResponse(deviceAndAppManagementRoleDefinitionCollectionResponse: DeviceAndAppManagementRoleDefinitionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceAndAppManagementRoleDefinitionCollectionResponse),
        "value": n => { deviceAndAppManagementRoleDefinitionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceAndAppManagementRoleDefinition) as any ; },
    }
}

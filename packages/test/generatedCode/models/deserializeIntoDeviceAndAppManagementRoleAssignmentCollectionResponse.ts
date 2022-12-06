import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDeviceAndAppManagementRoleAssignment} from './deserializeIntoDeviceAndAppManagementRoleAssignment';
import {DeviceAndAppManagementRoleAssignmentCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceAndAppManagementRoleAssignmentCollectionResponse(deviceAndAppManagementRoleAssignmentCollectionResponse: DeviceAndAppManagementRoleAssignmentCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceAndAppManagementRoleAssignmentCollectionResponse),
        "value": n => { deviceAndAppManagementRoleAssignmentCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceAndAppManagementRoleAssignment) as any ; },
    }
}

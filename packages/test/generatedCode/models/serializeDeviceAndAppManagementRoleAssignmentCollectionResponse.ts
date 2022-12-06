import {DeviceAndAppManagementRoleAssignmentCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceAndAppManagementRoleAssignment} from './serializeDeviceAndAppManagementRoleAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceAndAppManagementRoleAssignmentCollectionResponse(writer: SerializationWriter, deviceAndAppManagementRoleAssignmentCollectionResponse: DeviceAndAppManagementRoleAssignmentCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceAndAppManagementRoleAssignmentCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", deviceAndAppManagementRoleAssignmentCollectionResponse.value as any, serializeDeviceAndAppManagementRoleAssignment);
}

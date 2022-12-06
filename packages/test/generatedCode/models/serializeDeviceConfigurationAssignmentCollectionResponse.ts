import {DeviceConfigurationAssignmentCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceConfigurationAssignment} from './serializeDeviceConfigurationAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceConfigurationAssignmentCollectionResponse(writer: SerializationWriter, deviceConfigurationAssignmentCollectionResponse: DeviceConfigurationAssignmentCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceConfigurationAssignmentCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", deviceConfigurationAssignmentCollectionResponse.value as any, serializeDeviceConfigurationAssignment);
}

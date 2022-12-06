import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDeviceConfigurationAssignment} from './deserializeIntoDeviceConfigurationAssignment';
import {DeviceConfigurationAssignmentCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceConfigurationAssignmentCollectionResponse(deviceConfigurationAssignmentCollectionResponse: DeviceConfigurationAssignmentCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceConfigurationAssignmentCollectionResponse),
        "value": n => { deviceConfigurationAssignmentCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceConfigurationAssignment) as any ; },
    }
}

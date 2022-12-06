import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDeviceConfigurationState} from './deserializeIntoDeviceConfigurationState';
import {DeviceConfigurationStateCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceConfigurationStateCollectionResponse(deviceConfigurationStateCollectionResponse: DeviceConfigurationStateCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceConfigurationStateCollectionResponse),
        "value": n => { deviceConfigurationStateCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceConfigurationState) as any ; },
    }
}

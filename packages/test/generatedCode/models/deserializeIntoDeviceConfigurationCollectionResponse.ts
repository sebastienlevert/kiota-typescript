import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
import {DeviceConfigurationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceConfigurationCollectionResponse(deviceConfigurationCollectionResponse: DeviceConfigurationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceConfigurationCollectionResponse),
        "value": n => { deviceConfigurationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceConfiguration) as any ; },
    }
}

import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDeviceConfigurationDeviceStatus} from './deserializeIntoDeviceConfigurationDeviceStatus';
import {DeviceConfigurationDeviceStatusCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceConfigurationDeviceStatusCollectionResponse(deviceConfigurationDeviceStatusCollectionResponse: DeviceConfigurationDeviceStatusCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceConfigurationDeviceStatusCollectionResponse),
        "value": n => { deviceConfigurationDeviceStatusCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceConfigurationDeviceStatus) as any ; },
    }
}

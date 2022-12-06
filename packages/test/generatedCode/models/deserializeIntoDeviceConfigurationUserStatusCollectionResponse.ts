import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDeviceConfigurationUserStatus} from './deserializeIntoDeviceConfigurationUserStatus';
import {DeviceConfigurationUserStatusCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceConfigurationUserStatusCollectionResponse(deviceConfigurationUserStatusCollectionResponse: DeviceConfigurationUserStatusCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceConfigurationUserStatusCollectionResponse),
        "value": n => { deviceConfigurationUserStatusCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceConfigurationUserStatus) as any ; },
    }
}

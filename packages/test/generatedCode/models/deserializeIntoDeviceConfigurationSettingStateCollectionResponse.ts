import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDeviceConfigurationSettingState} from './deserializeIntoDeviceConfigurationSettingState';
import {DeviceConfigurationSettingStateCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceConfigurationSettingStateCollectionResponse(deviceConfigurationSettingStateCollectionResponse: DeviceConfigurationSettingStateCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceConfigurationSettingStateCollectionResponse),
        "value": n => { deviceConfigurationSettingStateCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceConfigurationSettingState) as any ; },
    }
}

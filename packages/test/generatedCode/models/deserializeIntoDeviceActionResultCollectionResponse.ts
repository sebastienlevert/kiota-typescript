import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDeviceActionResult} from './deserializeIntoDeviceActionResult';
import {DeviceActionResultCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceActionResultCollectionResponse(deviceActionResultCollectionResponse: DeviceActionResultCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceActionResultCollectionResponse),
        "value": n => { deviceActionResultCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceActionResult) as any ; },
    }
}

import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDevice} from './deserializeIntoDevice';
import {DeviceCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceCollectionResponse(deviceCollectionResponse: DeviceCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceCollectionResponse),
        "value": n => { deviceCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDevice) as any ; },
    }
}

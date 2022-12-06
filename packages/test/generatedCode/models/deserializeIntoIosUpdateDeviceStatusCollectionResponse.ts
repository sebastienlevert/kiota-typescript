import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoIosUpdateDeviceStatus} from './deserializeIntoIosUpdateDeviceStatus';
import {IosUpdateDeviceStatusCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosUpdateDeviceStatusCollectionResponse(iosUpdateDeviceStatusCollectionResponse: IosUpdateDeviceStatusCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(iosUpdateDeviceStatusCollectionResponse),
        "value": n => { iosUpdateDeviceStatusCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIosUpdateDeviceStatus) as any ; },
    }
}

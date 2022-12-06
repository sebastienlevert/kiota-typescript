import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDeviceInstallState} from './deserializeIntoDeviceInstallState';
import {DeviceInstallStateCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceInstallStateCollectionResponse(deviceInstallStateCollectionResponse: DeviceInstallStateCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceInstallStateCollectionResponse),
        "value": n => { deviceInstallStateCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceInstallState) as any ; },
    }
}

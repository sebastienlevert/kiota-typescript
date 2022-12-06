import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDeviceManagementPartner} from './deserializeIntoDeviceManagementPartner';
import {DeviceManagementPartnerCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceManagementPartnerCollectionResponse(deviceManagementPartnerCollectionResponse: DeviceManagementPartnerCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceManagementPartnerCollectionResponse),
        "value": n => { deviceManagementPartnerCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceManagementPartner) as any ; },
    }
}

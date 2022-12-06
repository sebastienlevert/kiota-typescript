import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDeviceComplianceActionItem} from './deserializeIntoDeviceComplianceActionItem';
import {DeviceComplianceActionItemCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceComplianceActionItemCollectionResponse(deviceComplianceActionItemCollectionResponse: DeviceComplianceActionItemCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceComplianceActionItemCollectionResponse),
        "value": n => { deviceComplianceActionItemCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceComplianceActionItem) as any ; },
    }
}

import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDeviceCompliancePolicyState} from './deserializeIntoDeviceCompliancePolicyState';
import {DeviceCompliancePolicyStateCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceCompliancePolicyStateCollectionResponse(deviceCompliancePolicyStateCollectionResponse: DeviceCompliancePolicyStateCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceCompliancePolicyStateCollectionResponse),
        "value": n => { deviceCompliancePolicyStateCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceCompliancePolicyState) as any ; },
    }
}

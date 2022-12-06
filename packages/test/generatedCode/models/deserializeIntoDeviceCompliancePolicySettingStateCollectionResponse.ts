import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDeviceCompliancePolicySettingState} from './deserializeIntoDeviceCompliancePolicySettingState';
import {DeviceCompliancePolicySettingStateCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceCompliancePolicySettingStateCollectionResponse(deviceCompliancePolicySettingStateCollectionResponse: DeviceCompliancePolicySettingStateCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceCompliancePolicySettingStateCollectionResponse),
        "value": n => { deviceCompliancePolicySettingStateCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceCompliancePolicySettingState) as any ; },
    }
}

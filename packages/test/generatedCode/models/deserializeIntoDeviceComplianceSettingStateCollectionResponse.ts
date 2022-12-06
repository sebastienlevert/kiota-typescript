import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDeviceComplianceSettingState} from './deserializeIntoDeviceComplianceSettingState';
import {DeviceComplianceSettingStateCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceComplianceSettingStateCollectionResponse(deviceComplianceSettingStateCollectionResponse: DeviceComplianceSettingStateCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceComplianceSettingStateCollectionResponse),
        "value": n => { deviceComplianceSettingStateCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceComplianceSettingState) as any ; },
    }
}

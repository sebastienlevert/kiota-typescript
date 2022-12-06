import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDeviceCompliancePolicySettingStateSummary} from './deserializeIntoDeviceCompliancePolicySettingStateSummary';
import {DeviceCompliancePolicySettingStateSummaryCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceCompliancePolicySettingStateSummaryCollectionResponse(deviceCompliancePolicySettingStateSummaryCollectionResponse: DeviceCompliancePolicySettingStateSummaryCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceCompliancePolicySettingStateSummaryCollectionResponse),
        "value": n => { deviceCompliancePolicySettingStateSummaryCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceCompliancePolicySettingStateSummary) as any ; },
    }
}

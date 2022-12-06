import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDeviceComplianceScheduledActionForRule} from './deserializeIntoDeviceComplianceScheduledActionForRule';
import {DeviceComplianceScheduledActionForRuleCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceComplianceScheduledActionForRuleCollectionResponse(deviceComplianceScheduledActionForRuleCollectionResponse: DeviceComplianceScheduledActionForRuleCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceComplianceScheduledActionForRuleCollectionResponse),
        "value": n => { deviceComplianceScheduledActionForRuleCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceComplianceScheduledActionForRule) as any ; },
    }
}

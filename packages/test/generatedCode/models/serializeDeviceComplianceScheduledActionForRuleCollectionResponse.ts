import {DeviceComplianceScheduledActionForRuleCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceComplianceScheduledActionForRule} from './serializeDeviceComplianceScheduledActionForRule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceComplianceScheduledActionForRuleCollectionResponse(writer: SerializationWriter, deviceComplianceScheduledActionForRuleCollectionResponse: DeviceComplianceScheduledActionForRuleCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceComplianceScheduledActionForRuleCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", deviceComplianceScheduledActionForRuleCollectionResponse.value as any, serializeDeviceComplianceScheduledActionForRule);
}

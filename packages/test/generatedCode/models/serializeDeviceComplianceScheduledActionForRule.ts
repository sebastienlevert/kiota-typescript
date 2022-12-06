import {DeviceComplianceScheduledActionForRule} from './index';
import {serializeDeviceComplianceActionItem} from './serializeDeviceComplianceActionItem';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceComplianceScheduledActionForRule(writer: SerializationWriter, deviceComplianceScheduledActionForRule: DeviceComplianceScheduledActionForRule | undefined = {}) : void {
        serializeEntity(writer, deviceComplianceScheduledActionForRule)
            writer.writeStringValue("ruleName", deviceComplianceScheduledActionForRule.ruleName);
            writer.writeCollectionOfObjectValuesFromMethod("scheduledActionConfigurations", deviceComplianceScheduledActionForRule.scheduledActionConfigurations as any, serializeDeviceComplianceActionItem);
}

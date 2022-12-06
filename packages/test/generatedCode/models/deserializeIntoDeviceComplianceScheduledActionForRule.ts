import {deserializeIntoDeviceComplianceActionItem} from './deserializeIntoDeviceComplianceActionItem';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceComplianceScheduledActionForRule} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceComplianceScheduledActionForRule(deviceComplianceScheduledActionForRule: DeviceComplianceScheduledActionForRule | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceComplianceScheduledActionForRule),
        "ruleName": n => { deviceComplianceScheduledActionForRule.ruleName = n.getStringValue() as any ; },
        "scheduledActionConfigurations": n => { deviceComplianceScheduledActionForRule.scheduledActionConfigurations = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceComplianceActionItem) as any ; },
    }
}

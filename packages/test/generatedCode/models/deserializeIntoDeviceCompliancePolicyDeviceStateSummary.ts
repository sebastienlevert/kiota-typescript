import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceCompliancePolicyDeviceStateSummary} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceCompliancePolicyDeviceStateSummary(deviceCompliancePolicyDeviceStateSummary: DeviceCompliancePolicyDeviceStateSummary | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceCompliancePolicyDeviceStateSummary),
        "compliantDeviceCount": n => { deviceCompliancePolicyDeviceStateSummary.compliantDeviceCount = n.getNumberValue() as any ; },
        "configManagerCount": n => { deviceCompliancePolicyDeviceStateSummary.configManagerCount = n.getNumberValue() as any ; },
        "conflictDeviceCount": n => { deviceCompliancePolicyDeviceStateSummary.conflictDeviceCount = n.getNumberValue() as any ; },
        "errorDeviceCount": n => { deviceCompliancePolicyDeviceStateSummary.errorDeviceCount = n.getNumberValue() as any ; },
        "inGracePeriodCount": n => { deviceCompliancePolicyDeviceStateSummary.inGracePeriodCount = n.getNumberValue() as any ; },
        "nonCompliantDeviceCount": n => { deviceCompliancePolicyDeviceStateSummary.nonCompliantDeviceCount = n.getNumberValue() as any ; },
        "notApplicableDeviceCount": n => { deviceCompliancePolicyDeviceStateSummary.notApplicableDeviceCount = n.getNumberValue() as any ; },
        "remediatedDeviceCount": n => { deviceCompliancePolicyDeviceStateSummary.remediatedDeviceCount = n.getNumberValue() as any ; },
        "unknownDeviceCount": n => { deviceCompliancePolicyDeviceStateSummary.unknownDeviceCount = n.getNumberValue() as any ; },
    }
}

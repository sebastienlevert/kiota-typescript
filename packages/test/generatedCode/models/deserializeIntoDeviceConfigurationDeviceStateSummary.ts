import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceConfigurationDeviceStateSummary} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceConfigurationDeviceStateSummary(deviceConfigurationDeviceStateSummary: DeviceConfigurationDeviceStateSummary | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceConfigurationDeviceStateSummary),
        "compliantDeviceCount": n => { deviceConfigurationDeviceStateSummary.compliantDeviceCount = n.getNumberValue() as any ; },
        "conflictDeviceCount": n => { deviceConfigurationDeviceStateSummary.conflictDeviceCount = n.getNumberValue() as any ; },
        "errorDeviceCount": n => { deviceConfigurationDeviceStateSummary.errorDeviceCount = n.getNumberValue() as any ; },
        "nonCompliantDeviceCount": n => { deviceConfigurationDeviceStateSummary.nonCompliantDeviceCount = n.getNumberValue() as any ; },
        "notApplicableDeviceCount": n => { deviceConfigurationDeviceStateSummary.notApplicableDeviceCount = n.getNumberValue() as any ; },
        "remediatedDeviceCount": n => { deviceConfigurationDeviceStateSummary.remediatedDeviceCount = n.getNumberValue() as any ; },
        "unknownDeviceCount": n => { deviceConfigurationDeviceStateSummary.unknownDeviceCount = n.getNumberValue() as any ; },
    }
}

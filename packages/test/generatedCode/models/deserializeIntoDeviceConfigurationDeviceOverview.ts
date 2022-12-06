import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceConfigurationDeviceOverview} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceConfigurationDeviceOverview(deviceConfigurationDeviceOverview: DeviceConfigurationDeviceOverview | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceConfigurationDeviceOverview),
        "configurationVersion": n => { deviceConfigurationDeviceOverview.configurationVersion = n.getNumberValue() as any ; },
        "errorCount": n => { deviceConfigurationDeviceOverview.errorCount = n.getNumberValue() as any ; },
        "failedCount": n => { deviceConfigurationDeviceOverview.failedCount = n.getNumberValue() as any ; },
        "lastUpdateDateTime": n => { deviceConfigurationDeviceOverview.lastUpdateDateTime = n.getDateValue() as any ; },
        "notApplicableCount": n => { deviceConfigurationDeviceOverview.notApplicableCount = n.getNumberValue() as any ; },
        "pendingCount": n => { deviceConfigurationDeviceOverview.pendingCount = n.getNumberValue() as any ; },
        "successCount": n => { deviceConfigurationDeviceOverview.successCount = n.getNumberValue() as any ; },
    }
}

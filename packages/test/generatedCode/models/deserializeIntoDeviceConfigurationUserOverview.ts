import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceConfigurationUserOverview} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceConfigurationUserOverview(deviceConfigurationUserOverview: DeviceConfigurationUserOverview | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceConfigurationUserOverview),
        "configurationVersion": n => { deviceConfigurationUserOverview.configurationVersion = n.getNumberValue() as any ; },
        "errorCount": n => { deviceConfigurationUserOverview.errorCount = n.getNumberValue() as any ; },
        "failedCount": n => { deviceConfigurationUserOverview.failedCount = n.getNumberValue() as any ; },
        "lastUpdateDateTime": n => { deviceConfigurationUserOverview.lastUpdateDateTime = n.getDateValue() as any ; },
        "notApplicableCount": n => { deviceConfigurationUserOverview.notApplicableCount = n.getNumberValue() as any ; },
        "pendingCount": n => { deviceConfigurationUserOverview.pendingCount = n.getNumberValue() as any ; },
        "successCount": n => { deviceConfigurationUserOverview.successCount = n.getNumberValue() as any ; },
    }
}

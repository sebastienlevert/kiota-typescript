import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceComplianceUserOverview} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceComplianceUserOverview(deviceComplianceUserOverview: DeviceComplianceUserOverview | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceComplianceUserOverview),
        "configurationVersion": n => { deviceComplianceUserOverview.configurationVersion = n.getNumberValue() as any ; },
        "errorCount": n => { deviceComplianceUserOverview.errorCount = n.getNumberValue() as any ; },
        "failedCount": n => { deviceComplianceUserOverview.failedCount = n.getNumberValue() as any ; },
        "lastUpdateDateTime": n => { deviceComplianceUserOverview.lastUpdateDateTime = n.getDateValue() as any ; },
        "notApplicableCount": n => { deviceComplianceUserOverview.notApplicableCount = n.getNumberValue() as any ; },
        "pendingCount": n => { deviceComplianceUserOverview.pendingCount = n.getNumberValue() as any ; },
        "successCount": n => { deviceComplianceUserOverview.successCount = n.getNumberValue() as any ; },
    }
}

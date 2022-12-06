import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceComplianceDeviceOverview} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceComplianceDeviceOverview(deviceComplianceDeviceOverview: DeviceComplianceDeviceOverview | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceComplianceDeviceOverview),
        "configurationVersion": n => { deviceComplianceDeviceOverview.configurationVersion = n.getNumberValue() as any ; },
        "errorCount": n => { deviceComplianceDeviceOverview.errorCount = n.getNumberValue() as any ; },
        "failedCount": n => { deviceComplianceDeviceOverview.failedCount = n.getNumberValue() as any ; },
        "lastUpdateDateTime": n => { deviceComplianceDeviceOverview.lastUpdateDateTime = n.getDateValue() as any ; },
        "notApplicableCount": n => { deviceComplianceDeviceOverview.notApplicableCount = n.getNumberValue() as any ; },
        "pendingCount": n => { deviceComplianceDeviceOverview.pendingCount = n.getNumberValue() as any ; },
        "successCount": n => { deviceComplianceDeviceOverview.successCount = n.getNumberValue() as any ; },
    }
}

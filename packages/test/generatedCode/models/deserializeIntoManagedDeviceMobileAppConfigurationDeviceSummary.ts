import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ManagedDeviceMobileAppConfigurationDeviceSummary} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedDeviceMobileAppConfigurationDeviceSummary(managedDeviceMobileAppConfigurationDeviceSummary: ManagedDeviceMobileAppConfigurationDeviceSummary | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(managedDeviceMobileAppConfigurationDeviceSummary),
        "configurationVersion": n => { managedDeviceMobileAppConfigurationDeviceSummary.configurationVersion = n.getNumberValue() as any ; },
        "errorCount": n => { managedDeviceMobileAppConfigurationDeviceSummary.errorCount = n.getNumberValue() as any ; },
        "failedCount": n => { managedDeviceMobileAppConfigurationDeviceSummary.failedCount = n.getNumberValue() as any ; },
        "lastUpdateDateTime": n => { managedDeviceMobileAppConfigurationDeviceSummary.lastUpdateDateTime = n.getDateValue() as any ; },
        "notApplicableCount": n => { managedDeviceMobileAppConfigurationDeviceSummary.notApplicableCount = n.getNumberValue() as any ; },
        "pendingCount": n => { managedDeviceMobileAppConfigurationDeviceSummary.pendingCount = n.getNumberValue() as any ; },
        "successCount": n => { managedDeviceMobileAppConfigurationDeviceSummary.successCount = n.getNumberValue() as any ; },
    }
}

import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ManagedDeviceMobileAppConfigurationUserSummary} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedDeviceMobileAppConfigurationUserSummary(managedDeviceMobileAppConfigurationUserSummary: ManagedDeviceMobileAppConfigurationUserSummary | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(managedDeviceMobileAppConfigurationUserSummary),
        "configurationVersion": n => { managedDeviceMobileAppConfigurationUserSummary.configurationVersion = n.getNumberValue() as any ; },
        "errorCount": n => { managedDeviceMobileAppConfigurationUserSummary.errorCount = n.getNumberValue() as any ; },
        "failedCount": n => { managedDeviceMobileAppConfigurationUserSummary.failedCount = n.getNumberValue() as any ; },
        "lastUpdateDateTime": n => { managedDeviceMobileAppConfigurationUserSummary.lastUpdateDateTime = n.getDateValue() as any ; },
        "notApplicableCount": n => { managedDeviceMobileAppConfigurationUserSummary.notApplicableCount = n.getNumberValue() as any ; },
        "pendingCount": n => { managedDeviceMobileAppConfigurationUserSummary.pendingCount = n.getNumberValue() as any ; },
        "successCount": n => { managedDeviceMobileAppConfigurationUserSummary.successCount = n.getNumberValue() as any ; },
    }
}

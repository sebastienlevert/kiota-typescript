import {deserializeIntoDeviceManagementTroubleshootingErrorDetails} from './deserializeIntoDeviceManagementTroubleshootingErrorDetails';
import {MobileAppTroubleshootingHistoryItem} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileAppTroubleshootingHistoryItem(mobileAppTroubleshootingHistoryItem: MobileAppTroubleshootingHistoryItem | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "occurrenceDateTime": n => { mobileAppTroubleshootingHistoryItem.occurrenceDateTime = n.getDateValue() as any ; },
        "troubleshootingErrorDetails": n => { mobileAppTroubleshootingHistoryItem.troubleshootingErrorDetails = n.getObject(deserializeIntoDeviceManagementTroubleshootingErrorDetails) as any ; },
    }
}

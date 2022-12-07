import {MobileAppTroubleshootingHistoryItem} from './index';
import {serializeDeviceManagementTroubleshootingErrorDetails} from './serializeDeviceManagementTroubleshootingErrorDetails';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMobileAppTroubleshootingHistoryItem(writer: SerializationWriter, mobileAppTroubleshootingHistoryItem: MobileAppTroubleshootingHistoryItem | undefined = {}) : void {
            writer.writeDateValue("occurrenceDateTime", mobileAppTroubleshootingHistoryItem.occurrenceDateTime);
            writer.writeObjectValueFromMethod("troubleshootingErrorDetails", mobileAppTroubleshootingHistoryItem.troubleshootingErrorDetails as any, serializeDeviceManagementTroubleshootingErrorDetails);
}

import {MobileAppTroubleshootingEvent} from './index';
import {serializeAppLogCollectionRequest} from './serializeAppLogCollectionRequest';
import {serializeDeviceManagementTroubleshootingEvent} from './serializeDeviceManagementTroubleshootingEvent';
import {serializeMobileAppTroubleshootingHistoryItem} from './serializeMobileAppTroubleshootingHistoryItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMobileAppTroubleshootingEvent(writer: SerializationWriter, mobileAppTroubleshootingEvent: MobileAppTroubleshootingEvent | undefined = {}) : void {
        serializeDeviceManagementTroubleshootingEvent(writer, mobileAppTroubleshootingEvent)
            writer.writeStringValue("applicationId", mobileAppTroubleshootingEvent.applicationId);
            writer.writeCollectionOfObjectValuesFromMethod("appLogCollectionRequests", mobileAppTroubleshootingEvent.appLogCollectionRequests as any, serializeAppLogCollectionRequest);
            writer.writeCollectionOfObjectValuesFromMethod("history", mobileAppTroubleshootingEvent.history as any, serializeMobileAppTroubleshootingHistoryItem);
            writer.writeStringValue("managedDeviceIdentifier", mobileAppTroubleshootingEvent.managedDeviceIdentifier);
            writer.writeStringValue("userId", mobileAppTroubleshootingEvent.userId);
}

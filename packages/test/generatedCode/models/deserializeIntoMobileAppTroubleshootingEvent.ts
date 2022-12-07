import {deserializeIntoAppLogCollectionRequest} from './deserializeIntoAppLogCollectionRequest';
import {deserializeIntoDeviceManagementTroubleshootingEvent} from './deserializeIntoDeviceManagementTroubleshootingEvent';
import {deserializeIntoMobileAppTroubleshootingHistoryItem} from './deserializeIntoMobileAppTroubleshootingHistoryItem';
import {MobileAppTroubleshootingEvent} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileAppTroubleshootingEvent(mobileAppTroubleshootingEvent: MobileAppTroubleshootingEvent | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceManagementTroubleshootingEvent(mobileAppTroubleshootingEvent),
        "applicationId": n => { mobileAppTroubleshootingEvent.applicationId = n.getStringValue() as any ; },
        "appLogCollectionRequests": n => { mobileAppTroubleshootingEvent.appLogCollectionRequests = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAppLogCollectionRequest) as any ; },
        "history": n => { mobileAppTroubleshootingEvent.history = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMobileAppTroubleshootingHistoryItem) as any ; },
        "managedDeviceIdentifier": n => { mobileAppTroubleshootingEvent.managedDeviceIdentifier = n.getStringValue() as any ; },
        "userId": n => { mobileAppTroubleshootingEvent.userId = n.getStringValue() as any ; },
    }
}

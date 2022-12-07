import {AppLogCollectionRequest, DeviceManagementTroubleshootingEvent, MobileAppTroubleshootingHistoryItem} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MobileAppTroubleshootingEvent extends DeviceManagementTroubleshootingEvent, Partial<Parsable> {
    /** Intune application identifier. */
    applicationId?: string;
    /** The collection property of AppLogUploadRequest. */
    appLogCollectionRequests?: AppLogCollectionRequest[];
    /** Intune Mobile Application Troubleshooting History Item */
    history?: MobileAppTroubleshootingHistoryItem[];
    /** Device identifier created or collected by Intune. */
    managedDeviceIdentifier?: string;
    /** Identifier for the user that tried to enroll the device. */
    userId?: string;
}

import {MobileAppAssignmentSettings} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MacOsLobAppAssignmentSettings extends MobileAppAssignmentSettings, Partial<Parsable> {
    /** When TRUE, indicates that the app should be uninstalled when the device is removed from Intune. When FALSE, indicates that the app will not be uninstalled when the device is removed from Intune. */
    uninstallOnDeviceRemoval?: boolean;
}

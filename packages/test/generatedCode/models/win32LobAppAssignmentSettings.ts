import {MobileAppAssignmentSettings, MobileAppInstallTimeSettings, Win32LobAppRestartSettings} from './index';
import {Win32LobAppDeliveryOptimizationPriority} from './win32LobAppDeliveryOptimizationPriority';
import {Win32LobAppNotification} from './win32LobAppNotification';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Win32LobAppAssignmentSettings extends MobileAppAssignmentSettings, Partial<Parsable> {
    /** Contains value for delivery optimization priority. */
    deliveryOptimizationPriority?: Win32LobAppDeliveryOptimizationPriority;
    /** The install time settings to apply for this app assignment. */
    installTimeSettings?: MobileAppInstallTimeSettings;
    /** Contains value for notification status. */
    notifications?: Win32LobAppNotification;
    /** The reboot settings to apply for this app assignment. */
    restartSettings?: Win32LobAppRestartSettings;
}

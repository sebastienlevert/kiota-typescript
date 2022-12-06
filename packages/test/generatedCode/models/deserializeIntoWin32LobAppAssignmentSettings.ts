import {deserializeIntoMobileAppAssignmentSettings} from './deserializeIntoMobileAppAssignmentSettings';
import {deserializeIntoMobileAppInstallTimeSettings} from './deserializeIntoMobileAppInstallTimeSettings';
import {deserializeIntoWin32LobAppRestartSettings} from './deserializeIntoWin32LobAppRestartSettings';
import {Win32LobAppAssignmentSettings} from './index';
import {Win32LobAppDeliveryOptimizationPriority} from './win32LobAppDeliveryOptimizationPriority';
import {Win32LobAppNotification} from './win32LobAppNotification';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWin32LobAppAssignmentSettings(win32LobAppAssignmentSettings: Win32LobAppAssignmentSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileAppAssignmentSettings(win32LobAppAssignmentSettings),
        "deliveryOptimizationPriority": n => { win32LobAppAssignmentSettings.deliveryOptimizationPriority = n.getEnumValue<Win32LobAppDeliveryOptimizationPriority>(Win32LobAppDeliveryOptimizationPriority) as any ; },
        "installTimeSettings": n => { win32LobAppAssignmentSettings.installTimeSettings = n.getObject(deserializeIntoMobileAppInstallTimeSettings) as any ; },
        "notifications": n => { win32LobAppAssignmentSettings.notifications = n.getEnumValue<Win32LobAppNotification>(Win32LobAppNotification) as any ; },
        "restartSettings": n => { win32LobAppAssignmentSettings.restartSettings = n.getObject(deserializeIntoWin32LobAppRestartSettings) as any ; },
    }
}

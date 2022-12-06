import {Win32LobAppAssignmentSettings} from './index';
import {serializeMobileAppAssignmentSettings} from './serializeMobileAppAssignmentSettings';
import {serializeMobileAppInstallTimeSettings} from './serializeMobileAppInstallTimeSettings';
import {serializeWin32LobAppRestartSettings} from './serializeWin32LobAppRestartSettings';
import {Win32LobAppDeliveryOptimizationPriority} from './win32LobAppDeliveryOptimizationPriority';
import {Win32LobAppNotification} from './win32LobAppNotification';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWin32LobAppAssignmentSettings(writer: SerializationWriter, win32LobAppAssignmentSettings: Win32LobAppAssignmentSettings | undefined = {}) : void {
        serializeMobileAppAssignmentSettings(writer, win32LobAppAssignmentSettings)
            writer.writeEnumValue<Win32LobAppDeliveryOptimizationPriority>("deliveryOptimizationPriority", win32LobAppAssignmentSettings.deliveryOptimizationPriority);
            writer.writeObjectValueFromMethod("installTimeSettings", win32LobAppAssignmentSettings.installTimeSettings as any, serializeMobileAppInstallTimeSettings);
            writer.writeEnumValue<Win32LobAppNotification>("notifications", win32LobAppAssignmentSettings.notifications);
            writer.writeObjectValueFromMethod("restartSettings", win32LobAppAssignmentSettings.restartSettings as any, serializeWin32LobAppRestartSettings);
}

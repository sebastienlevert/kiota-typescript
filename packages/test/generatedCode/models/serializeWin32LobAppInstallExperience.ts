import {Win32LobAppInstallExperience} from './index';
import {RunAsAccountType} from './runAsAccountType';
import {Win32LobAppRestartBehavior} from './win32LobAppRestartBehavior';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWin32LobAppInstallExperience(writer: SerializationWriter, win32LobAppInstallExperience: Win32LobAppInstallExperience | undefined = {}) : void {
            writer.writeEnumValue<Win32LobAppRestartBehavior>("deviceRestartBehavior", win32LobAppInstallExperience.deviceRestartBehavior);
            writer.writeStringValue("@odata.type", win32LobAppInstallExperience.odataType);
            writer.writeEnumValue<RunAsAccountType>("runAsAccount", win32LobAppInstallExperience.runAsAccount);
}

import {Win32LobAppInstallExperience} from './index';
import {RunAsAccountType} from './runAsAccountType';
import {Win32LobAppRestartBehavior} from './win32LobAppRestartBehavior';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWin32LobAppInstallExperience(win32LobAppInstallExperience: Win32LobAppInstallExperience | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "deviceRestartBehavior": n => { win32LobAppInstallExperience.deviceRestartBehavior = n.getEnumValue<Win32LobAppRestartBehavior>(Win32LobAppRestartBehavior) as any ; },
        "@odata.type": n => { win32LobAppInstallExperience.odataType = n.getStringValue() as any ; },
        "runAsAccount": n => { win32LobAppInstallExperience.runAsAccount = n.getEnumValue<RunAsAccountType>(RunAsAccountType) as any ; },
    }
}

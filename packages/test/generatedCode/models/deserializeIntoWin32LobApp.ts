import {deserializeIntoMobileLobApp} from './deserializeIntoMobileLobApp';
import {deserializeIntoWin32LobAppInstallExperience} from './deserializeIntoWin32LobAppInstallExperience';
import {deserializeIntoWin32LobAppMsiInformation} from './deserializeIntoWin32LobAppMsiInformation';
import {deserializeIntoWin32LobAppReturnCode} from './deserializeIntoWin32LobAppReturnCode';
import {deserializeIntoWin32LobAppRule} from './deserializeIntoWin32LobAppRule';
import {Win32LobApp} from './index';
import {WindowsArchitecture} from './windowsArchitecture';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWin32LobApp(win32LobApp: Win32LobApp | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileLobApp(win32LobApp),
        "applicableArchitectures": n => { win32LobApp.applicableArchitectures = n.getEnumValue<WindowsArchitecture>(WindowsArchitecture) as any ; },
        "installCommandLine": n => { win32LobApp.installCommandLine = n.getStringValue() as any ; },
        "installExperience": n => { win32LobApp.installExperience = n.getObject(deserializeIntoWin32LobAppInstallExperience) as any ; },
        "minimumCpuSpeedInMHz": n => { win32LobApp.minimumCpuSpeedInMHz = n.getNumberValue() as any ; },
        "minimumFreeDiskSpaceInMB": n => { win32LobApp.minimumFreeDiskSpaceInMB = n.getNumberValue() as any ; },
        "minimumMemoryInMB": n => { win32LobApp.minimumMemoryInMB = n.getNumberValue() as any ; },
        "minimumNumberOfProcessors": n => { win32LobApp.minimumNumberOfProcessors = n.getNumberValue() as any ; },
        "minimumSupportedWindowsRelease": n => { win32LobApp.minimumSupportedWindowsRelease = n.getStringValue() as any ; },
        "msiInformation": n => { win32LobApp.msiInformation = n.getObject(deserializeIntoWin32LobAppMsiInformation) as any ; },
        "returnCodes": n => { win32LobApp.returnCodes = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWin32LobAppReturnCode) as any ; },
        "rules": n => { win32LobApp.rules = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWin32LobAppRule) as any ; },
        "setupFilePath": n => { win32LobApp.setupFilePath = n.getStringValue() as any ; },
        "uninstallCommandLine": n => { win32LobApp.uninstallCommandLine = n.getStringValue() as any ; },
    }
}

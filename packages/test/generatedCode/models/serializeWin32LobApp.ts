import {Win32LobApp} from './index';
import {serializeMobileLobApp} from './serializeMobileLobApp';
import {serializeWin32LobAppInstallExperience} from './serializeWin32LobAppInstallExperience';
import {serializeWin32LobAppMsiInformation} from './serializeWin32LobAppMsiInformation';
import {serializeWin32LobAppReturnCode} from './serializeWin32LobAppReturnCode';
import {serializeWin32LobAppRule} from './serializeWin32LobAppRule';
import {WindowsArchitecture} from './windowsArchitecture';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWin32LobApp(writer: SerializationWriter, win32LobApp: Win32LobApp | undefined = {}) : void {
        serializeMobileLobApp(writer, win32LobApp)
            writer.writeEnumValue<WindowsArchitecture>("applicableArchitectures", win32LobApp.applicableArchitectures);
            writer.writeStringValue("installCommandLine", win32LobApp.installCommandLine);
            writer.writeObjectValueFromMethod("installExperience", win32LobApp.installExperience as any, serializeWin32LobAppInstallExperience);
            writer.writeNumberValue("minimumCpuSpeedInMHz", win32LobApp.minimumCpuSpeedInMHz);
            writer.writeNumberValue("minimumFreeDiskSpaceInMB", win32LobApp.minimumFreeDiskSpaceInMB);
            writer.writeNumberValue("minimumMemoryInMB", win32LobApp.minimumMemoryInMB);
            writer.writeNumberValue("minimumNumberOfProcessors", win32LobApp.minimumNumberOfProcessors);
            writer.writeStringValue("minimumSupportedWindowsRelease", win32LobApp.minimumSupportedWindowsRelease);
            writer.writeObjectValueFromMethod("msiInformation", win32LobApp.msiInformation as any, serializeWin32LobAppMsiInformation);
            writer.writeCollectionOfObjectValuesFromMethod("returnCodes", win32LobApp.returnCodes as any, serializeWin32LobAppReturnCode);
            writer.writeCollectionOfObjectValuesFromMethod("rules", win32LobApp.rules as any, serializeWin32LobAppRule);
            writer.writeStringValue("setupFilePath", win32LobApp.setupFilePath);
            writer.writeStringValue("uninstallCommandLine", win32LobApp.uninstallCommandLine);
}

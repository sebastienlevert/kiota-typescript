import {MobileLobApp, Win32LobAppInstallExperience, Win32LobAppMsiInformation, Win32LobAppReturnCode, Win32LobAppRule} from './index';
import {WindowsArchitecture} from './windowsArchitecture';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Win32LobApp extends MobileLobApp, Partial<Parsable> {
    /** Contains properties for Windows architecture. */
    applicableArchitectures?: WindowsArchitecture;
    /** The command line to install this app */
    installCommandLine?: string;
    /** The install experience for this app. */
    installExperience?: Win32LobAppInstallExperience;
    /** The value for the minimum CPU speed which is required to install this app. */
    minimumCpuSpeedInMHz?: number;
    /** The value for the minimum free disk space which is required to install this app. */
    minimumFreeDiskSpaceInMB?: number;
    /** The value for the minimum physical memory which is required to install this app. */
    minimumMemoryInMB?: number;
    /** The value for the minimum number of processors which is required to install this app. */
    minimumNumberOfProcessors?: number;
    /** The value for the minimum supported windows release. */
    minimumSupportedWindowsRelease?: string;
    /** The MSI details if this Win32 app is an MSI app. */
    msiInformation?: Win32LobAppMsiInformation;
    /** The return codes for post installation behavior. */
    returnCodes?: Win32LobAppReturnCode[];
    /** The detection and requirement rules for this app. */
    rules?: Win32LobAppRule[];
    /** The relative path of the setup file in the encrypted Win32LobApp package. */
    setupFilePath?: string;
    /** The command line to uninstall this app */
    uninstallCommandLine?: string;
}

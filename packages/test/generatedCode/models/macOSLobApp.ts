import {MacOSLobChildApp, MacOSMinimumOperatingSystem, MobileLobApp} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MacOSLobApp extends MobileLobApp, Partial<Parsable> {
    /** The build number of the package. This should match the package CFBundleShortVersionString of the .pkg file. */
    buildNumber?: string;
    /** The primary bundleId of the package. */
    bundleId?: string;
    /** List of ComplexType macOSLobChildApp objects. Represents the apps expected to be installed by the package. */
    childApps?: MacOSLobChildApp[];
    /** When TRUE, indicates that the app's version will NOT be used to detect if the app is installed on a device. When FALSE, indicates that the app's version will be used to detect if the app is installed on a device. Set this to true for apps that use a self update feature. */
    ignoreVersionDetection?: boolean;
    /** When TRUE, indicates that the app will be installed as managed (requires macOS 11.0 and other managed package restrictions). When FALSE, indicates that the app will be installed as unmanaged. */
    installAsManaged?: boolean;
    /** The MD5 hash codes. This is empty if the package was uploaded directly. If the Intune App Wrapping Tool is used to create a .intunemac, this value can be found inside the Detection.xml file. */
    md5Hash?: string[];
    /** The chunk size for MD5 hash. This is '0' or empty if the package was uploaded directly. If the Intune App Wrapping Tool is used to create a .intunemac, this value can be found inside the Detection.xml file. */
    md5HashChunkSize?: number;
    /** ComplexType macOSMinimumOperatingSystem that indicates the minimum operating system applicable for the application. */
    minimumSupportedOperatingSystem?: MacOSMinimumOperatingSystem;
    /** The version number of the package. This should match the package CFBundleVersion in the packageinfo file. */
    versionNumber?: string;
}

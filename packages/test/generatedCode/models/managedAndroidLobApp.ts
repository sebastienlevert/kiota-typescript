import {AndroidMinimumOperatingSystem, ManagedMobileLobApp} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAndroidLobApp extends ManagedMobileLobApp, Partial<Parsable> {
    /** The value for the minimum applicable operating system. */
    minimumSupportedOperatingSystem?: AndroidMinimumOperatingSystem;
    /** The package identifier. */
    packageId?: string;
    /** The version code of managed Android Line of Business (LoB) app. */
    versionCode?: string;
    /** The version name of managed Android Line of Business (LoB) app. */
    versionName?: string;
}

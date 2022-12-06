import {AndroidMinimumOperatingSystem, MobileLobApp} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AndroidLobApp extends MobileLobApp, Partial<Parsable> {
    /** The value for the minimum applicable operating system. */
    minimumSupportedOperatingSystem?: AndroidMinimumOperatingSystem;
    /** The package identifier. */
    packageId?: string;
    /** The version code of Android Line of Business (LoB) app. */
    versionCode?: string;
    /** The version name of Android Line of Business (LoB) app. */
    versionName?: string;
}

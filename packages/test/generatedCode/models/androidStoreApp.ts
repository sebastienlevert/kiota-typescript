import {AndroidMinimumOperatingSystem, MobileApp} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AndroidStoreApp extends MobileApp, Partial<Parsable> {
    /** The Android app store URL. */
    appStoreUrl?: string;
    /** The value for the minimum applicable operating system. */
    minimumSupportedOperatingSystem?: AndroidMinimumOperatingSystem;
    /** The package identifier. */
    packageId?: string;
}

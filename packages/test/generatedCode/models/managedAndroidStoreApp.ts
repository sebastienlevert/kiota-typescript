import {AndroidMinimumOperatingSystem, ManagedApp} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAndroidStoreApp extends ManagedApp, Partial<Parsable> {
    /** The Android AppStoreUrl. */
    appStoreUrl?: string;
    /** Contains properties for the minimum operating system required for an Android mobile app. */
    minimumSupportedOperatingSystem?: AndroidMinimumOperatingSystem;
    /** The app's package ID. */
    packageId?: string;
}

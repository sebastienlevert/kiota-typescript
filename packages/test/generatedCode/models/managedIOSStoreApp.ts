import {IosDeviceType, IosMinimumOperatingSystem, ManagedApp} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedIOSStoreApp extends ManagedApp, Partial<Parsable> {
    /** Contains properties of the possible iOS device types the mobile app can run on. */
    applicableDeviceType?: IosDeviceType;
    /** The Apple AppStoreUrl. */
    appStoreUrl?: string;
    /** The app's Bundle ID. */
    bundleId?: string;
    /** Contains properties of the minimum operating system required for an iOS mobile app. */
    minimumSupportedOperatingSystem?: IosMinimumOperatingSystem;
}

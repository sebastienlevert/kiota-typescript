import {IosDeviceType, IosMinimumOperatingSystem, MobileApp} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosStoreApp extends MobileApp, Partial<Parsable> {
    /** Contains properties of the possible iOS device types the mobile app can run on. */
    applicableDeviceType?: IosDeviceType;
    /** The Apple App Store URL */
    appStoreUrl?: string;
    /** The Identity Name. */
    bundleId?: string;
    /** The value for the minimum applicable operating system. */
    minimumSupportedOperatingSystem?: IosMinimumOperatingSystem;
}

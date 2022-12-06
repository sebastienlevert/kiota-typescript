import {IosDeviceType, IosMinimumOperatingSystem, ManagedMobileLobApp} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedIOSLobApp extends ManagedMobileLobApp, Partial<Parsable> {
    /** Contains properties of the possible iOS device types the mobile app can run on. */
    applicableDeviceType?: IosDeviceType;
    /** The build number of managed iOS Line of Business (LoB) app. */
    buildNumber?: string;
    /** The Identity Name. */
    bundleId?: string;
    /** The expiration time. */
    expirationDateTime?: Date;
    /** The value for the minimum applicable operating system. */
    minimumSupportedOperatingSystem?: IosMinimumOperatingSystem;
    /** The version number of managed iOS Line of Business (LoB) app. */
    versionNumber?: string;
}

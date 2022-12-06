import {MobileLobApp, WindowsMinimumOperatingSystem} from './index';
import {WindowsArchitecture} from './windowsArchitecture';
import {WindowsDeviceType} from './windowsDeviceType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsUniversalAppX extends MobileLobApp, Partial<Parsable> {
    /** Contains properties for Windows architecture. */
    applicableArchitectures?: WindowsArchitecture;
    /** Contains properties for Windows device type. */
    applicableDeviceTypes?: WindowsDeviceType;
    /** The Identity Name. */
    identityName?: string;
    /** The Identity Publisher Hash. */
    identityPublisherHash?: string;
    /** The Identity Resource Identifier. */
    identityResourceIdentifier?: string;
    /** The identity version. */
    identityVersion?: string;
    /** Whether or not the app is a bundle. */
    isBundle?: boolean;
    /** The minimum operating system required for a Windows mobile app. */
    minimumSupportedOperatingSystem?: WindowsMinimumOperatingSystem;
}

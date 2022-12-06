import {DeviceEnrollmentConfiguration, DeviceEnrollmentPlatformRestriction} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceEnrollmentPlatformRestrictionsConfiguration extends DeviceEnrollmentConfiguration, Partial<Parsable> {
    /** Android restrictions based on platform, platform operating system version, and device ownership */
    androidRestriction?: DeviceEnrollmentPlatformRestriction;
    /** Ios restrictions based on platform, platform operating system version, and device ownership */
    iosRestriction?: DeviceEnrollmentPlatformRestriction;
    /** Mac restrictions based on platform, platform operating system version, and device ownership */
    macOSRestriction?: DeviceEnrollmentPlatformRestriction;
    /** Windows mobile restrictions based on platform, platform operating system version, and device ownership */
    windowsMobileRestriction?: DeviceEnrollmentPlatformRestriction;
    /** Windows restrictions based on platform, platform operating system version, and device ownership */
    windowsRestriction?: DeviceEnrollmentPlatformRestriction;
}

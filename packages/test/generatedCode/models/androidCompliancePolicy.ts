import {AndroidRequiredPasswordType} from './androidRequiredPasswordType';
import {DeviceThreatProtectionLevel} from './deviceThreatProtectionLevel';
import {DeviceCompliancePolicy} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AndroidCompliancePolicy extends DeviceCompliancePolicy, Partial<Parsable> {
    /** Require that devices have enabled device threat protection. */
    deviceThreatProtectionEnabled?: boolean;
    /** Device threat protection levels for the Device Threat Protection API. */
    deviceThreatProtectionRequiredSecurityLevel?: DeviceThreatProtectionLevel;
    /** Minimum Android security patch level. */
    minAndroidSecurityPatchLevel?: string;
    /** Maximum Android version. */
    osMaximumVersion?: string;
    /** Minimum Android version. */
    osMinimumVersion?: string;
    /** Number of days before the password expires. Valid values 1 to 365 */
    passwordExpirationDays?: number;
    /** Minimum password length. Valid values 4 to 16 */
    passwordMinimumLength?: number;
    /** Minutes of inactivity before a password is required. */
    passwordMinutesOfInactivityBeforeLock?: number;
    /** Number of previous passwords to block. Valid values 1 to 24 */
    passwordPreviousPasswordBlockCount?: number;
    /** Require a password to unlock device. */
    passwordRequired?: boolean;
    /** Android required password type. */
    passwordRequiredType?: AndroidRequiredPasswordType;
    /** Devices must not be jailbroken or rooted. */
    securityBlockJailbrokenDevices?: boolean;
    /** Disable USB debugging on Android devices. */
    securityDisableUsbDebugging?: boolean;
    /** Require that devices disallow installation of apps from unknown sources. */
    securityPreventInstallAppsFromUnknownSources?: boolean;
    /** Require the device to pass the Company Portal client app runtime integrity check. */
    securityRequireCompanyPortalAppIntegrity?: boolean;
    /** Require Google Play Services to be installed and enabled on the device. */
    securityRequireGooglePlayServices?: boolean;
    /** Require the device to pass the SafetyNet basic integrity check. */
    securityRequireSafetyNetAttestationBasicIntegrity?: boolean;
    /** Require the device to pass the SafetyNet certified device check. */
    securityRequireSafetyNetAttestationCertifiedDevice?: boolean;
    /** Require the device to have up to date security providers. The device will require Google Play Services to be enabled and up to date. */
    securityRequireUpToDateSecurityProviders?: boolean;
    /** Require the Android Verify apps feature is turned on. */
    securityRequireVerifyApps?: boolean;
    /** Require encryption on Android devices. */
    storageRequireEncryption?: boolean;
}

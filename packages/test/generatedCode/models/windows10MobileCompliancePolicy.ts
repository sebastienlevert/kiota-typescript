import {DeviceCompliancePolicy} from './index';
import {RequiredPasswordType} from './requiredPasswordType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Windows10MobileCompliancePolicy extends DeviceCompliancePolicy, Partial<Parsable> {
    /** Require devices to be reported healthy by Windows Device Health Attestation - bit locker is enabled */
    bitLockerEnabled?: boolean;
    /** Require devices to be reported as healthy by Windows Device Health Attestation. */
    codeIntegrityEnabled?: boolean;
    /** Require devices to be reported as healthy by Windows Device Health Attestation - early launch antimalware driver is enabled. */
    earlyLaunchAntiMalwareDriverEnabled?: boolean;
    /** Maximum Windows Phone version. */
    osMaximumVersion?: string;
    /** Minimum Windows Phone version. */
    osMinimumVersion?: string;
    /** Whether or not to block syncing the calendar. */
    passwordBlockSimple?: boolean;
    /** Number of days before password expiration. Valid values 1 to 255 */
    passwordExpirationDays?: number;
    /** The number of character sets required in the password. */
    passwordMinimumCharacterSetCount?: number;
    /** Minimum password length. Valid values 4 to 16 */
    passwordMinimumLength?: number;
    /** Minutes of inactivity before a password is required. */
    passwordMinutesOfInactivityBeforeLock?: number;
    /** The number of previous passwords to prevent re-use of. */
    passwordPreviousPasswordBlockCount?: number;
    /** Require a password to unlock Windows Phone device. */
    passwordRequired?: boolean;
    /** Possible values of required passwords. */
    passwordRequiredType?: RequiredPasswordType;
    /** Require a password to unlock an idle device. */
    passwordRequireToUnlockFromIdle?: boolean;
    /** Require devices to be reported as healthy by Windows Device Health Attestation - secure boot is enabled. */
    secureBootEnabled?: boolean;
    /** Require encryption on windows devices. */
    storageRequireEncryption?: boolean;
}

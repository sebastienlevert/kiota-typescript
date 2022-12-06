import {DeviceCompliancePolicy} from './index';
import {RequiredPasswordType} from './requiredPasswordType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Windows10CompliancePolicy extends DeviceCompliancePolicy, Partial<Parsable> {
    /** Require devices to be reported healthy by Windows Device Health Attestation - bit locker is enabled */
    bitLockerEnabled?: boolean;
    /** Require devices to be reported as healthy by Windows Device Health Attestation. */
    codeIntegrityEnabled?: boolean;
    /** Require devices to be reported as healthy by Windows Device Health Attestation - early launch antimalware driver is enabled. */
    earlyLaunchAntiMalwareDriverEnabled?: boolean;
    /** Maximum Windows Phone version. */
    mobileOsMaximumVersion?: string;
    /** Minimum Windows Phone version. */
    mobileOsMinimumVersion?: string;
    /** Maximum Windows 10 version. */
    osMaximumVersion?: string;
    /** Minimum Windows 10 version. */
    osMinimumVersion?: string;
    /** Indicates whether or not to block simple password. */
    passwordBlockSimple?: boolean;
    /** The password expiration in days. */
    passwordExpirationDays?: number;
    /** The number of character sets required in the password. */
    passwordMinimumCharacterSetCount?: number;
    /** The minimum password length. */
    passwordMinimumLength?: number;
    /** Minutes of inactivity before a password is required. */
    passwordMinutesOfInactivityBeforeLock?: number;
    /** The number of previous passwords to prevent re-use of. */
    passwordPreviousPasswordBlockCount?: number;
    /** Require a password to unlock Windows device. */
    passwordRequired?: boolean;
    /** Require a password to unlock an idle device. */
    passwordRequiredToUnlockFromIdle?: boolean;
    /** Possible values of required passwords. */
    passwordRequiredType?: RequiredPasswordType;
    /** Require devices to be reported as healthy by Windows Device Health Attestation. */
    requireHealthyDeviceReport?: boolean;
    /** Require devices to be reported as healthy by Windows Device Health Attestation - secure boot is enabled. */
    secureBootEnabled?: boolean;
    /** Require encryption on windows devices. */
    storageRequireEncryption?: boolean;
}

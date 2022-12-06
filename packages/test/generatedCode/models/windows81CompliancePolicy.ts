import {DeviceCompliancePolicy} from './index';
import {RequiredPasswordType} from './requiredPasswordType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Windows81CompliancePolicy extends DeviceCompliancePolicy, Partial<Parsable> {
    /** Maximum Windows 8.1 version. */
    osMaximumVersion?: string;
    /** Minimum Windows 8.1 version. */
    osMinimumVersion?: string;
    /** Indicates whether or not to block simple password. */
    passwordBlockSimple?: boolean;
    /** Password expiration in days. */
    passwordExpirationDays?: number;
    /** The number of character sets required in the password. */
    passwordMinimumCharacterSetCount?: number;
    /** The minimum password length. */
    passwordMinimumLength?: number;
    /** Minutes of inactivity before a password is required. */
    passwordMinutesOfInactivityBeforeLock?: number;
    /** The number of previous passwords to prevent re-use of. Valid values 0 to 24 */
    passwordPreviousPasswordBlockCount?: number;
    /** Require a password to unlock Windows device. */
    passwordRequired?: boolean;
    /** Possible values of required passwords. */
    passwordRequiredType?: RequiredPasswordType;
    /** Indicates whether or not to require encryption on a windows 8.1 device. */
    storageRequireEncryption?: boolean;
}

import {DeviceCompliancePolicy} from './index';
import {RequiredPasswordType} from './requiredPasswordType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsPhone81CompliancePolicy extends DeviceCompliancePolicy, Partial<Parsable> {
    /** Maximum Windows Phone version. */
    osMaximumVersion?: string;
    /** Minimum Windows Phone version. */
    osMinimumVersion?: string;
    /** Whether or not to block syncing the calendar. */
    passwordBlockSimple?: boolean;
    /** Number of days before the password expires. */
    passwordExpirationDays?: number;
    /** The number of character sets required in the password. */
    passwordMinimumCharacterSetCount?: number;
    /** Minimum length of passwords. */
    passwordMinimumLength?: number;
    /** Minutes of inactivity before a password is required. */
    passwordMinutesOfInactivityBeforeLock?: number;
    /** Number of previous passwords to block. Valid values 0 to 24 */
    passwordPreviousPasswordBlockCount?: number;
    /** Whether or not to require a password. */
    passwordRequired?: boolean;
    /** Possible values of required passwords. */
    passwordRequiredType?: RequiredPasswordType;
    /** Require encryption on windows phone devices. */
    storageRequireEncryption?: boolean;
}

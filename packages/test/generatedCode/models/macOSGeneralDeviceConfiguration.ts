import {AppListType} from './appListType';
import {AppListItem, DeviceConfiguration} from './index';
import {RequiredPasswordType} from './requiredPasswordType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MacOSGeneralDeviceConfiguration extends DeviceConfiguration, Partial<Parsable> {
    /** Possible values of the compliance app list. */
    compliantAppListType?: AppListType;
    /** List of apps in the compliance (either allow list or block list, controlled by CompliantAppListType). This collection can contain a maximum of 10000 elements. */
    compliantAppsList?: AppListItem[];
    /** An email address lacking a suffix that matches any of these strings will be considered out-of-domain. */
    emailInDomainSuffixes?: string[];
    /** Block simple passwords. */
    passwordBlockSimple?: boolean;
    /** Number of days before the password expires. */
    passwordExpirationDays?: number;
    /** Number of character sets a password must contain. Valid values 0 to 4 */
    passwordMinimumCharacterSetCount?: number;
    /** Minimum length of passwords. */
    passwordMinimumLength?: number;
    /** Minutes of inactivity required before a password is required. */
    passwordMinutesOfInactivityBeforeLock?: number;
    /** Minutes of inactivity required before the screen times out. */
    passwordMinutesOfInactivityBeforeScreenTimeout?: number;
    /** Number of previous passwords to block. */
    passwordPreviousPasswordBlockCount?: number;
    /** Whether or not to require a password. */
    passwordRequired?: boolean;
    /** Possible values of required passwords. */
    passwordRequiredType?: RequiredPasswordType;
}

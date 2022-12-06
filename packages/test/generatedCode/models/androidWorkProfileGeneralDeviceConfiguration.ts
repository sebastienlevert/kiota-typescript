import {AndroidWorkProfileCrossProfileDataSharingType} from './androidWorkProfileCrossProfileDataSharingType';
import {AndroidWorkProfileDefaultAppPermissionPolicyType} from './androidWorkProfileDefaultAppPermissionPolicyType';
import {AndroidWorkProfileRequiredPasswordType} from './androidWorkProfileRequiredPasswordType';
import {DeviceConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AndroidWorkProfileGeneralDeviceConfiguration extends DeviceConfiguration, Partial<Parsable> {
    /** Indicates whether or not to block fingerprint unlock. */
    passwordBlockFingerprintUnlock?: boolean;
    /** Indicates whether or not to block Smart Lock and other trust agents. */
    passwordBlockTrustAgents?: boolean;
    /** Number of days before the password expires. Valid values 1 to 365 */
    passwordExpirationDays?: number;
    /** Minimum length of passwords. Valid values 4 to 16 */
    passwordMinimumLength?: number;
    /** Minutes of inactivity before the screen times out. */
    passwordMinutesOfInactivityBeforeScreenTimeout?: number;
    /** Number of previous passwords to block. Valid values 0 to 24 */
    passwordPreviousPasswordBlockCount?: number;
    /** Android Work Profile required password type. */
    passwordRequiredType?: AndroidWorkProfileRequiredPasswordType;
    /** Number of sign in failures allowed before factory reset. Valid values 1 to 16 */
    passwordSignInFailureCountBeforeFactoryReset?: number;
    /** Require the Android Verify apps feature is turned on. */
    securityRequireVerifyApps?: boolean;
    /** Block users from adding/removing accounts in work profile. */
    workProfileBlockAddingAccounts?: boolean;
    /** Block work profile camera. */
    workProfileBlockCamera?: boolean;
    /** Block display work profile caller ID in personal profile. */
    workProfileBlockCrossProfileCallerId?: boolean;
    /** Block work profile contacts availability in personal profile. */
    workProfileBlockCrossProfileContactsSearch?: boolean;
    /** Boolean that indicates if the setting disallow cross profile copy/paste is enabled. */
    workProfileBlockCrossProfileCopyPaste?: boolean;
    /** Indicates whether or not to block notifications while device locked. */
    workProfileBlockNotificationsWhileDeviceLocked?: boolean;
    /** Block screen capture in work profile. */
    workProfileBlockScreenCapture?: boolean;
    /** Allow bluetooth devices to access enterprise contacts. */
    workProfileBluetoothEnableContactSharing?: boolean;
    /** Android Work Profile cross profile data sharing type. */
    workProfileDataSharingType?: AndroidWorkProfileCrossProfileDataSharingType;
    /** Android Work Profile default app permission policy type. */
    workProfileDefaultAppPermissionPolicy?: AndroidWorkProfileDefaultAppPermissionPolicyType;
    /** Indicates whether or not to block fingerprint unlock for work profile. */
    workProfilePasswordBlockFingerprintUnlock?: boolean;
    /** Indicates whether or not to block Smart Lock and other trust agents for work profile. */
    workProfilePasswordBlockTrustAgents?: boolean;
    /** Number of days before the work profile password expires. Valid values 1 to 365 */
    workProfilePasswordExpirationDays?: number;
    /** Minimum length of work profile password. Valid values 4 to 16 */
    workProfilePasswordMinimumLength?: number;
    /** Minimum # of letter characters required in work profile password. Valid values 1 to 10 */
    workProfilePasswordMinLetterCharacters?: number;
    /** Minimum # of lower-case characters required in work profile password. Valid values 1 to 10 */
    workProfilePasswordMinLowerCaseCharacters?: number;
    /** Minimum # of non-letter characters required in work profile password. Valid values 1 to 10 */
    workProfilePasswordMinNonLetterCharacters?: number;
    /** Minimum # of numeric characters required in work profile password. Valid values 1 to 10 */
    workProfilePasswordMinNumericCharacters?: number;
    /** Minimum # of symbols required in work profile password. Valid values 1 to 10 */
    workProfilePasswordMinSymbolCharacters?: number;
    /** Minimum # of upper-case characters required in work profile password. Valid values 1 to 10 */
    workProfilePasswordMinUpperCaseCharacters?: number;
    /** Minutes of inactivity before the screen times out. */
    workProfilePasswordMinutesOfInactivityBeforeScreenTimeout?: number;
    /** Number of previous work profile passwords to block. Valid values 0 to 24 */
    workProfilePasswordPreviousPasswordBlockCount?: number;
    /** Android Work Profile required password type. */
    workProfilePasswordRequiredType?: AndroidWorkProfileRequiredPasswordType;
    /** Number of sign in failures allowed before work profile is removed and all corporate data deleted. Valid values 1 to 16 */
    workProfilePasswordSignInFailureCountBeforeFactoryReset?: number;
    /** Password is required or not for work profile */
    workProfileRequirePassword?: boolean;
}

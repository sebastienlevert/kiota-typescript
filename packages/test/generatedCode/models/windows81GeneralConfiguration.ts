import {DeviceConfiguration} from './index';
import {InternetSiteSecurityLevel} from './internetSiteSecurityLevel';
import {RequiredPasswordType} from './requiredPasswordType';
import {SiteSecurityLevel} from './siteSecurityLevel';
import {WindowsUserAccountControlSettings} from './windowsUserAccountControlSettings';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Windows81GeneralConfiguration extends DeviceConfiguration, Partial<Parsable> {
    /** Indicates whether or not to Block the user from adding email accounts to the device that are not associated with a Microsoft account. */
    accountsBlockAddingNonMicrosoftAccountEmail?: boolean;
    /** Value indicating whether this policy only applies to Windows 8.1. This property is read-only. */
    applyOnlyToWindows81?: boolean;
    /** Indicates whether or not to block auto fill. */
    browserBlockAutofill?: boolean;
    /** Indicates whether or not to block automatic detection of Intranet sites. */
    browserBlockAutomaticDetectionOfIntranetSites?: boolean;
    /** Indicates whether or not to block enterprise mode access. */
    browserBlockEnterpriseModeAccess?: boolean;
    /** Indicates whether or not to Block the user from using JavaScript. */
    browserBlockJavaScript?: boolean;
    /** Indicates whether or not to block plug-ins. */
    browserBlockPlugins?: boolean;
    /** Indicates whether or not to block popups. */
    browserBlockPopups?: boolean;
    /** Indicates whether or not to Block the user from sending the do not track header. */
    browserBlockSendingDoNotTrackHeader?: boolean;
    /** Indicates whether or not to block a single word entry on Intranet sites. */
    browserBlockSingleWordEntryOnIntranetSites?: boolean;
    /** The enterprise mode site list location. Could be a local file, local network or http location. */
    browserEnterpriseModeSiteListLocation?: string;
    /** Possible values for internet site security level. */
    browserInternetSecurityLevel?: InternetSiteSecurityLevel;
    /** Possible values for site security level. */
    browserIntranetSecurityLevel?: SiteSecurityLevel;
    /** The logging report location. */
    browserLoggingReportLocation?: string;
    /** Indicates whether or not to require a firewall. */
    browserRequireFirewall?: boolean;
    /** Indicates whether or not to require fraud warning. */
    browserRequireFraudWarning?: boolean;
    /** Indicates whether or not to require high security for restricted sites. */
    browserRequireHighSecurityForRestrictedSites?: boolean;
    /** Indicates whether or not to require the user to use the smart screen filter. */
    browserRequireSmartScreen?: boolean;
    /** Possible values for site security level. */
    browserTrustedSitesSecurityLevel?: SiteSecurityLevel;
    /** Indicates whether or not to block data roaming. */
    cellularBlockDataRoaming?: boolean;
    /** Indicates whether or not to block diagnostic data submission. */
    diagnosticsBlockDataSubmission?: boolean;
    /** Indicates whether or not to Block the user from using a pictures password and pin. */
    passwordBlockPicturePasswordAndPin?: boolean;
    /** Password expiration in days. */
    passwordExpirationDays?: number;
    /** The number of character sets required in the password. */
    passwordMinimumCharacterSetCount?: number;
    /** The minimum password length. */
    passwordMinimumLength?: number;
    /** The minutes of inactivity before the screen times out. */
    passwordMinutesOfInactivityBeforeScreenTimeout?: number;
    /** The number of previous passwords to prevent re-use of. Valid values 0 to 24 */
    passwordPreviousPasswordBlockCount?: number;
    /** Possible values of required passwords. */
    passwordRequiredType?: RequiredPasswordType;
    /** The number of sign in failures before factory reset. */
    passwordSignInFailureCountBeforeFactoryReset?: number;
    /** Indicates whether or not to require encryption on a mobile device. */
    storageRequireDeviceEncryption?: boolean;
    /** Indicates whether or not to require automatic updates. */
    updatesRequireAutomaticUpdates?: boolean;
    /** Possible values for Windows user account control settings. */
    userAccountControlSettings?: WindowsUserAccountControlSettings;
    /** The work folders url. */
    workFoldersUrl?: string;
}

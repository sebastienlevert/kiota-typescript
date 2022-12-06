import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
import {Windows81GeneralConfiguration} from './index';
import {InternetSiteSecurityLevel} from './internetSiteSecurityLevel';
import {RequiredPasswordType} from './requiredPasswordType';
import {SiteSecurityLevel} from './siteSecurityLevel';
import {WindowsUserAccountControlSettings} from './windowsUserAccountControlSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindows81GeneralConfiguration(windows81GeneralConfiguration: Windows81GeneralConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(windows81GeneralConfiguration),
        "accountsBlockAddingNonMicrosoftAccountEmail": n => { windows81GeneralConfiguration.accountsBlockAddingNonMicrosoftAccountEmail = n.getBooleanValue() as any ; },
        "applyOnlyToWindows81": n => { windows81GeneralConfiguration.applyOnlyToWindows81 = n.getBooleanValue() as any ; },
        "browserBlockAutofill": n => { windows81GeneralConfiguration.browserBlockAutofill = n.getBooleanValue() as any ; },
        "browserBlockAutomaticDetectionOfIntranetSites": n => { windows81GeneralConfiguration.browserBlockAutomaticDetectionOfIntranetSites = n.getBooleanValue() as any ; },
        "browserBlockEnterpriseModeAccess": n => { windows81GeneralConfiguration.browserBlockEnterpriseModeAccess = n.getBooleanValue() as any ; },
        "browserBlockJavaScript": n => { windows81GeneralConfiguration.browserBlockJavaScript = n.getBooleanValue() as any ; },
        "browserBlockPlugins": n => { windows81GeneralConfiguration.browserBlockPlugins = n.getBooleanValue() as any ; },
        "browserBlockPopups": n => { windows81GeneralConfiguration.browserBlockPopups = n.getBooleanValue() as any ; },
        "browserBlockSendingDoNotTrackHeader": n => { windows81GeneralConfiguration.browserBlockSendingDoNotTrackHeader = n.getBooleanValue() as any ; },
        "browserBlockSingleWordEntryOnIntranetSites": n => { windows81GeneralConfiguration.browserBlockSingleWordEntryOnIntranetSites = n.getBooleanValue() as any ; },
        "browserEnterpriseModeSiteListLocation": n => { windows81GeneralConfiguration.browserEnterpriseModeSiteListLocation = n.getStringValue() as any ; },
        "browserInternetSecurityLevel": n => { windows81GeneralConfiguration.browserInternetSecurityLevel = n.getEnumValue<InternetSiteSecurityLevel>(InternetSiteSecurityLevel) as any ; },
        "browserIntranetSecurityLevel": n => { windows81GeneralConfiguration.browserIntranetSecurityLevel = n.getEnumValue<SiteSecurityLevel>(SiteSecurityLevel) as any ; },
        "browserLoggingReportLocation": n => { windows81GeneralConfiguration.browserLoggingReportLocation = n.getStringValue() as any ; },
        "browserRequireFirewall": n => { windows81GeneralConfiguration.browserRequireFirewall = n.getBooleanValue() as any ; },
        "browserRequireFraudWarning": n => { windows81GeneralConfiguration.browserRequireFraudWarning = n.getBooleanValue() as any ; },
        "browserRequireHighSecurityForRestrictedSites": n => { windows81GeneralConfiguration.browserRequireHighSecurityForRestrictedSites = n.getBooleanValue() as any ; },
        "browserRequireSmartScreen": n => { windows81GeneralConfiguration.browserRequireSmartScreen = n.getBooleanValue() as any ; },
        "browserTrustedSitesSecurityLevel": n => { windows81GeneralConfiguration.browserTrustedSitesSecurityLevel = n.getEnumValue<SiteSecurityLevel>(SiteSecurityLevel) as any ; },
        "cellularBlockDataRoaming": n => { windows81GeneralConfiguration.cellularBlockDataRoaming = n.getBooleanValue() as any ; },
        "diagnosticsBlockDataSubmission": n => { windows81GeneralConfiguration.diagnosticsBlockDataSubmission = n.getBooleanValue() as any ; },
        "passwordBlockPicturePasswordAndPin": n => { windows81GeneralConfiguration.passwordBlockPicturePasswordAndPin = n.getBooleanValue() as any ; },
        "passwordExpirationDays": n => { windows81GeneralConfiguration.passwordExpirationDays = n.getNumberValue() as any ; },
        "passwordMinimumCharacterSetCount": n => { windows81GeneralConfiguration.passwordMinimumCharacterSetCount = n.getNumberValue() as any ; },
        "passwordMinimumLength": n => { windows81GeneralConfiguration.passwordMinimumLength = n.getNumberValue() as any ; },
        "passwordMinutesOfInactivityBeforeScreenTimeout": n => { windows81GeneralConfiguration.passwordMinutesOfInactivityBeforeScreenTimeout = n.getNumberValue() as any ; },
        "passwordPreviousPasswordBlockCount": n => { windows81GeneralConfiguration.passwordPreviousPasswordBlockCount = n.getNumberValue() as any ; },
        "passwordRequiredType": n => { windows81GeneralConfiguration.passwordRequiredType = n.getEnumValue<RequiredPasswordType>(RequiredPasswordType) as any ; },
        "passwordSignInFailureCountBeforeFactoryReset": n => { windows81GeneralConfiguration.passwordSignInFailureCountBeforeFactoryReset = n.getNumberValue() as any ; },
        "storageRequireDeviceEncryption": n => { windows81GeneralConfiguration.storageRequireDeviceEncryption = n.getBooleanValue() as any ; },
        "updatesRequireAutomaticUpdates": n => { windows81GeneralConfiguration.updatesRequireAutomaticUpdates = n.getBooleanValue() as any ; },
        "userAccountControlSettings": n => { windows81GeneralConfiguration.userAccountControlSettings = n.getEnumValue<WindowsUserAccountControlSettings>(WindowsUserAccountControlSettings) as any ; },
        "workFoldersUrl": n => { windows81GeneralConfiguration.workFoldersUrl = n.getStringValue() as any ; },
    }
}

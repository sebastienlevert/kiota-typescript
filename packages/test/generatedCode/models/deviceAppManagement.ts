import {AndroidManagedAppProtection, DefaultManagedAppProtection, Entity, IosManagedAppProtection, ManagedAppPolicy, ManagedAppRegistration, ManagedAppStatus, ManagedDeviceMobileAppConfiguration, ManagedEBook, MdmWindowsInformationProtectionPolicy, MobileApp, MobileAppCategory, TargetedManagedAppConfiguration, VppToken, WindowsInformationProtectionPolicy} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceAppManagement extends Entity, Partial<Parsable> {
    /** Android managed app policies. */
    androidManagedAppProtections?: AndroidManagedAppProtection[];
    /** Default managed app policies. */
    defaultManagedAppProtections?: DefaultManagedAppProtection[];
    /** iOS managed app policies. */
    iosManagedAppProtections?: IosManagedAppProtection[];
    /** Whether the account is enabled for syncing applications from the Microsoft Store for Business. */
    isEnabledForMicrosoftStoreForBusiness?: boolean;
    /** Managed app policies. */
    managedAppPolicies?: ManagedAppPolicy[];
    /** The managed app registrations. */
    managedAppRegistrations?: ManagedAppRegistration[];
    /** The managed app statuses. */
    managedAppStatuses?: ManagedAppStatus[];
    /** The Managed eBook. */
    managedEBooks?: ManagedEBook[];
    /** Windows information protection for apps running on devices which are MDM enrolled. */
    mdmWindowsInformationProtectionPolicies?: MdmWindowsInformationProtectionPolicy[];
    /** The locale information used to sync applications from the Microsoft Store for Business. Cultures that are specific to a country/region. The names of these cultures follow RFC 4646 (Windows Vista and later). The format is -<country/regioncode2>, where  is a lowercase two-letter code derived from ISO 639-1 and <country/regioncode2> is an uppercase two-letter code derived from ISO 3166. For example, en-US for English (United States) is a specific culture. */
    microsoftStoreForBusinessLanguage?: string;
    /** The last time an application sync from the Microsoft Store for Business was completed. */
    microsoftStoreForBusinessLastCompletedApplicationSyncTime?: Date;
    /** The last time the apps from the Microsoft Store for Business were synced successfully for the account. */
    microsoftStoreForBusinessLastSuccessfulSyncDateTime?: Date;
    /** The mobile app categories. */
    mobileAppCategories?: MobileAppCategory[];
    /** The Managed Device Mobile Application Configurations. */
    mobileAppConfigurations?: ManagedDeviceMobileAppConfiguration[];
    /** The mobile apps. */
    mobileApps?: MobileApp[];
    /** Targeted managed app configurations. */
    targetedManagedAppConfigurations?: TargetedManagedAppConfiguration[];
    /** List of Vpp tokens for this organization. */
    vppTokens?: VppToken[];
    /** Windows information protection for apps running on devices which are not MDM enrolled. */
    windowsInformationProtectionPolicies?: WindowsInformationProtectionPolicy[];
}

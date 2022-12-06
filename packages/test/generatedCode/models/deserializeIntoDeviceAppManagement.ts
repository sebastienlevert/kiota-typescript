import {deserializeIntoAndroidManagedAppProtection} from './deserializeIntoAndroidManagedAppProtection';
import {deserializeIntoDefaultManagedAppProtection} from './deserializeIntoDefaultManagedAppProtection';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoIosManagedAppProtection} from './deserializeIntoIosManagedAppProtection';
import {deserializeIntoManagedAppPolicy} from './deserializeIntoManagedAppPolicy';
import {deserializeIntoManagedAppRegistration} from './deserializeIntoManagedAppRegistration';
import {deserializeIntoManagedAppStatus} from './deserializeIntoManagedAppStatus';
import {deserializeIntoManagedDeviceMobileAppConfiguration} from './deserializeIntoManagedDeviceMobileAppConfiguration';
import {deserializeIntoManagedEBook} from './deserializeIntoManagedEBook';
import {deserializeIntoMdmWindowsInformationProtectionPolicy} from './deserializeIntoMdmWindowsInformationProtectionPolicy';
import {deserializeIntoMobileApp} from './deserializeIntoMobileApp';
import {deserializeIntoMobileAppCategory} from './deserializeIntoMobileAppCategory';
import {deserializeIntoTargetedManagedAppConfiguration} from './deserializeIntoTargetedManagedAppConfiguration';
import {deserializeIntoVppToken} from './deserializeIntoVppToken';
import {deserializeIntoWindowsInformationProtectionPolicy} from './deserializeIntoWindowsInformationProtectionPolicy';
import {DeviceAppManagement} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceAppManagement(deviceAppManagement: DeviceAppManagement | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceAppManagement),
        "androidManagedAppProtections": n => { deviceAppManagement.androidManagedAppProtections = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAndroidManagedAppProtection) as any ; },
        "defaultManagedAppProtections": n => { deviceAppManagement.defaultManagedAppProtections = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDefaultManagedAppProtection) as any ; },
        "iosManagedAppProtections": n => { deviceAppManagement.iosManagedAppProtections = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIosManagedAppProtection) as any ; },
        "isEnabledForMicrosoftStoreForBusiness": n => { deviceAppManagement.isEnabledForMicrosoftStoreForBusiness = n.getBooleanValue() as any ; },
        "managedAppPolicies": n => { deviceAppManagement.managedAppPolicies = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedAppPolicy) as any ; },
        "managedAppRegistrations": n => { deviceAppManagement.managedAppRegistrations = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedAppRegistration) as any ; },
        "managedAppStatuses": n => { deviceAppManagement.managedAppStatuses = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedAppStatus) as any ; },
        "managedEBooks": n => { deviceAppManagement.managedEBooks = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedEBook) as any ; },
        "mdmWindowsInformationProtectionPolicies": n => { deviceAppManagement.mdmWindowsInformationProtectionPolicies = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMdmWindowsInformationProtectionPolicy) as any ; },
        "microsoftStoreForBusinessLanguage": n => { deviceAppManagement.microsoftStoreForBusinessLanguage = n.getStringValue() as any ; },
        "microsoftStoreForBusinessLastCompletedApplicationSyncTime": n => { deviceAppManagement.microsoftStoreForBusinessLastCompletedApplicationSyncTime = n.getDateValue() as any ; },
        "microsoftStoreForBusinessLastSuccessfulSyncDateTime": n => { deviceAppManagement.microsoftStoreForBusinessLastSuccessfulSyncDateTime = n.getDateValue() as any ; },
        "mobileAppCategories": n => { deviceAppManagement.mobileAppCategories = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMobileAppCategory) as any ; },
        "mobileAppConfigurations": n => { deviceAppManagement.mobileAppConfigurations = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedDeviceMobileAppConfiguration) as any ; },
        "mobileApps": n => { deviceAppManagement.mobileApps = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMobileApp) as any ; },
        "targetedManagedAppConfigurations": n => { deviceAppManagement.targetedManagedAppConfigurations = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTargetedManagedAppConfiguration) as any ; },
        "vppTokens": n => { deviceAppManagement.vppTokens = n.getCollectionOfObjectValuesFromMethod(deserializeIntoVppToken) as any ; },
        "windowsInformationProtectionPolicies": n => { deviceAppManagement.windowsInformationProtectionPolicies = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindowsInformationProtectionPolicy) as any ; },
    }
}

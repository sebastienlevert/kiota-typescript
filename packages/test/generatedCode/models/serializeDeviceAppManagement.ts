import {DeviceAppManagement} from './index';
import {serializeAndroidManagedAppProtection} from './serializeAndroidManagedAppProtection';
import {serializeDefaultManagedAppProtection} from './serializeDefaultManagedAppProtection';
import {serializeEntity} from './serializeEntity';
import {serializeIosManagedAppProtection} from './serializeIosManagedAppProtection';
import {serializeManagedAppPolicy} from './serializeManagedAppPolicy';
import {serializeManagedAppRegistration} from './serializeManagedAppRegistration';
import {serializeManagedAppStatus} from './serializeManagedAppStatus';
import {serializeManagedDeviceMobileAppConfiguration} from './serializeManagedDeviceMobileAppConfiguration';
import {serializeManagedEBook} from './serializeManagedEBook';
import {serializeMdmWindowsInformationProtectionPolicy} from './serializeMdmWindowsInformationProtectionPolicy';
import {serializeMobileApp} from './serializeMobileApp';
import {serializeMobileAppCategory} from './serializeMobileAppCategory';
import {serializeTargetedManagedAppConfiguration} from './serializeTargetedManagedAppConfiguration';
import {serializeVppToken} from './serializeVppToken';
import {serializeWindowsInformationProtectionPolicy} from './serializeWindowsInformationProtectionPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceAppManagement(writer: SerializationWriter, deviceAppManagement: DeviceAppManagement | undefined = {}) : void {
        serializeEntity(writer, deviceAppManagement)
            writer.writeCollectionOfObjectValuesFromMethod("androidManagedAppProtections", deviceAppManagement.androidManagedAppProtections as any, serializeAndroidManagedAppProtection);
            writer.writeCollectionOfObjectValuesFromMethod("defaultManagedAppProtections", deviceAppManagement.defaultManagedAppProtections as any, serializeDefaultManagedAppProtection);
            writer.writeCollectionOfObjectValuesFromMethod("iosManagedAppProtections", deviceAppManagement.iosManagedAppProtections as any, serializeIosManagedAppProtection);
            writer.writeBooleanValue("isEnabledForMicrosoftStoreForBusiness", deviceAppManagement.isEnabledForMicrosoftStoreForBusiness);
            writer.writeCollectionOfObjectValuesFromMethod("managedAppPolicies", deviceAppManagement.managedAppPolicies as any, serializeManagedAppPolicy);
            writer.writeCollectionOfObjectValuesFromMethod("managedAppRegistrations", deviceAppManagement.managedAppRegistrations as any, serializeManagedAppRegistration);
            writer.writeCollectionOfObjectValuesFromMethod("managedAppStatuses", deviceAppManagement.managedAppStatuses as any, serializeManagedAppStatus);
            writer.writeCollectionOfObjectValuesFromMethod("managedEBooks", deviceAppManagement.managedEBooks as any, serializeManagedEBook);
            writer.writeCollectionOfObjectValuesFromMethod("mdmWindowsInformationProtectionPolicies", deviceAppManagement.mdmWindowsInformationProtectionPolicies as any, serializeMdmWindowsInformationProtectionPolicy);
            writer.writeStringValue("microsoftStoreForBusinessLanguage", deviceAppManagement.microsoftStoreForBusinessLanguage);
            writer.writeDateValue("microsoftStoreForBusinessLastCompletedApplicationSyncTime", deviceAppManagement.microsoftStoreForBusinessLastCompletedApplicationSyncTime);
            writer.writeDateValue("microsoftStoreForBusinessLastSuccessfulSyncDateTime", deviceAppManagement.microsoftStoreForBusinessLastSuccessfulSyncDateTime);
            writer.writeCollectionOfObjectValuesFromMethod("mobileAppCategories", deviceAppManagement.mobileAppCategories as any, serializeMobileAppCategory);
            writer.writeCollectionOfObjectValuesFromMethod("mobileAppConfigurations", deviceAppManagement.mobileAppConfigurations as any, serializeManagedDeviceMobileAppConfiguration);
            writer.writeCollectionOfObjectValuesFromMethod("mobileApps", deviceAppManagement.mobileApps as any, serializeMobileApp);
            writer.writeCollectionOfObjectValuesFromMethod("targetedManagedAppConfigurations", deviceAppManagement.targetedManagedAppConfigurations as any, serializeTargetedManagedAppConfiguration);
            writer.writeCollectionOfObjectValuesFromMethod("vppTokens", deviceAppManagement.vppTokens as any, serializeVppToken);
            writer.writeCollectionOfObjectValuesFromMethod("windowsInformationProtectionPolicies", deviceAppManagement.windowsInformationProtectionPolicies as any, serializeWindowsInformationProtectionPolicy);
}

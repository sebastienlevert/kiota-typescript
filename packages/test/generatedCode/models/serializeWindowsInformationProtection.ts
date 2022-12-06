import {WindowsInformationProtection} from './index';
import {serializeManagedAppPolicy} from './serializeManagedAppPolicy';
import {serializeTargetedManagedAppPolicyAssignment} from './serializeTargetedManagedAppPolicyAssignment';
import {serializeWindowsInformationProtectionApp} from './serializeWindowsInformationProtectionApp';
import {serializeWindowsInformationProtectionAppLockerFile} from './serializeWindowsInformationProtectionAppLockerFile';
import {serializeWindowsInformationProtectionDataRecoveryCertificate} from './serializeWindowsInformationProtectionDataRecoveryCertificate';
import {serializeWindowsInformationProtectionIPRangeCollection} from './serializeWindowsInformationProtectionIPRangeCollection';
import {serializeWindowsInformationProtectionProxiedDomainCollection} from './serializeWindowsInformationProtectionProxiedDomainCollection';
import {serializeWindowsInformationProtectionResourceCollection} from './serializeWindowsInformationProtectionResourceCollection';
import {WindowsInformationProtectionEnforcementLevel} from './windowsInformationProtectionEnforcementLevel';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsInformationProtection(writer: SerializationWriter, windowsInformationProtection: WindowsInformationProtection | undefined = {}) : void {
        serializeManagedAppPolicy(writer, windowsInformationProtection)
            writer.writeCollectionOfObjectValuesFromMethod("assignments", windowsInformationProtection.assignments as any, serializeTargetedManagedAppPolicyAssignment);
            writer.writeBooleanValue("azureRightsManagementServicesAllowed", windowsInformationProtection.azureRightsManagementServicesAllowed);
            writer.writeObjectValueFromMethod("dataRecoveryCertificate", windowsInformationProtection.dataRecoveryCertificate as any, serializeWindowsInformationProtectionDataRecoveryCertificate);
            writer.writeEnumValue<WindowsInformationProtectionEnforcementLevel>("enforcementLevel", windowsInformationProtection.enforcementLevel);
            writer.writeStringValue("enterpriseDomain", windowsInformationProtection.enterpriseDomain);
            writer.writeCollectionOfObjectValuesFromMethod("enterpriseInternalProxyServers", windowsInformationProtection.enterpriseInternalProxyServers as any, serializeWindowsInformationProtectionResourceCollection);
            writer.writeCollectionOfObjectValuesFromMethod("enterpriseIPRanges", windowsInformationProtection.enterpriseIPRanges as any, serializeWindowsInformationProtectionIPRangeCollection);
            writer.writeBooleanValue("enterpriseIPRangesAreAuthoritative", windowsInformationProtection.enterpriseIPRangesAreAuthoritative);
            writer.writeCollectionOfObjectValuesFromMethod("enterpriseNetworkDomainNames", windowsInformationProtection.enterpriseNetworkDomainNames as any, serializeWindowsInformationProtectionResourceCollection);
            writer.writeCollectionOfObjectValuesFromMethod("enterpriseProtectedDomainNames", windowsInformationProtection.enterpriseProtectedDomainNames as any, serializeWindowsInformationProtectionResourceCollection);
            writer.writeCollectionOfObjectValuesFromMethod("enterpriseProxiedDomains", windowsInformationProtection.enterpriseProxiedDomains as any, serializeWindowsInformationProtectionProxiedDomainCollection);
            writer.writeCollectionOfObjectValuesFromMethod("enterpriseProxyServers", windowsInformationProtection.enterpriseProxyServers as any, serializeWindowsInformationProtectionResourceCollection);
            writer.writeBooleanValue("enterpriseProxyServersAreAuthoritative", windowsInformationProtection.enterpriseProxyServersAreAuthoritative);
            writer.writeCollectionOfObjectValuesFromMethod("exemptAppLockerFiles", windowsInformationProtection.exemptAppLockerFiles as any, serializeWindowsInformationProtectionAppLockerFile);
            writer.writeCollectionOfObjectValuesFromMethod("exemptApps", windowsInformationProtection.exemptApps as any, serializeWindowsInformationProtectionApp);
            writer.writeBooleanValue("iconsVisible", windowsInformationProtection.iconsVisible);
            writer.writeBooleanValue("indexingEncryptedStoresOrItemsBlocked", windowsInformationProtection.indexingEncryptedStoresOrItemsBlocked);
            writer.writeBooleanValue("isAssigned", windowsInformationProtection.isAssigned);
            writer.writeCollectionOfObjectValuesFromMethod("neutralDomainResources", windowsInformationProtection.neutralDomainResources as any, serializeWindowsInformationProtectionResourceCollection);
            writer.writeCollectionOfObjectValuesFromMethod("protectedAppLockerFiles", windowsInformationProtection.protectedAppLockerFiles as any, serializeWindowsInformationProtectionAppLockerFile);
            writer.writeCollectionOfObjectValuesFromMethod("protectedApps", windowsInformationProtection.protectedApps as any, serializeWindowsInformationProtectionApp);
            writer.writeBooleanValue("protectionUnderLockConfigRequired", windowsInformationProtection.protectionUnderLockConfigRequired);
            writer.writeBooleanValue("revokeOnUnenrollDisabled", windowsInformationProtection.revokeOnUnenrollDisabled);
            writer.writeStringValue("rightsManagementServicesTemplateId", windowsInformationProtection.rightsManagementServicesTemplateId);
            writer.writeCollectionOfObjectValuesFromMethod("smbAutoEncryptedFileExtensions", windowsInformationProtection.smbAutoEncryptedFileExtensions as any, serializeWindowsInformationProtectionResourceCollection);
}

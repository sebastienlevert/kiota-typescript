import {deserializeIntoManagedAppPolicy} from './deserializeIntoManagedAppPolicy';
import {deserializeIntoTargetedManagedAppPolicyAssignment} from './deserializeIntoTargetedManagedAppPolicyAssignment';
import {deserializeIntoWindowsInformationProtectionApp} from './deserializeIntoWindowsInformationProtectionApp';
import {deserializeIntoWindowsInformationProtectionAppLockerFile} from './deserializeIntoWindowsInformationProtectionAppLockerFile';
import {deserializeIntoWindowsInformationProtectionDataRecoveryCertificate} from './deserializeIntoWindowsInformationProtectionDataRecoveryCertificate';
import {deserializeIntoWindowsInformationProtectionIPRangeCollection} from './deserializeIntoWindowsInformationProtectionIPRangeCollection';
import {deserializeIntoWindowsInformationProtectionProxiedDomainCollection} from './deserializeIntoWindowsInformationProtectionProxiedDomainCollection';
import {deserializeIntoWindowsInformationProtectionResourceCollection} from './deserializeIntoWindowsInformationProtectionResourceCollection';
import {WindowsInformationProtection} from './index';
import {WindowsInformationProtectionEnforcementLevel} from './windowsInformationProtectionEnforcementLevel';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsInformationProtection(windowsInformationProtection: WindowsInformationProtection | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoManagedAppPolicy(windowsInformationProtection),
        "assignments": n => { windowsInformationProtection.assignments = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTargetedManagedAppPolicyAssignment) as any ; },
        "azureRightsManagementServicesAllowed": n => { windowsInformationProtection.azureRightsManagementServicesAllowed = n.getBooleanValue() as any ; },
        "dataRecoveryCertificate": n => { windowsInformationProtection.dataRecoveryCertificate = n.getObject(deserializeIntoWindowsInformationProtectionDataRecoveryCertificate) as any ; },
        "enforcementLevel": n => { windowsInformationProtection.enforcementLevel = n.getEnumValue<WindowsInformationProtectionEnforcementLevel>(WindowsInformationProtectionEnforcementLevel) as any ; },
        "enterpriseDomain": n => { windowsInformationProtection.enterpriseDomain = n.getStringValue() as any ; },
        "enterpriseInternalProxyServers": n => { windowsInformationProtection.enterpriseInternalProxyServers = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindowsInformationProtectionResourceCollection) as any ; },
        "enterpriseIPRanges": n => { windowsInformationProtection.enterpriseIPRanges = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindowsInformationProtectionIPRangeCollection) as any ; },
        "enterpriseIPRangesAreAuthoritative": n => { windowsInformationProtection.enterpriseIPRangesAreAuthoritative = n.getBooleanValue() as any ; },
        "enterpriseNetworkDomainNames": n => { windowsInformationProtection.enterpriseNetworkDomainNames = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindowsInformationProtectionResourceCollection) as any ; },
        "enterpriseProtectedDomainNames": n => { windowsInformationProtection.enterpriseProtectedDomainNames = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindowsInformationProtectionResourceCollection) as any ; },
        "enterpriseProxiedDomains": n => { windowsInformationProtection.enterpriseProxiedDomains = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindowsInformationProtectionProxiedDomainCollection) as any ; },
        "enterpriseProxyServers": n => { windowsInformationProtection.enterpriseProxyServers = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindowsInformationProtectionResourceCollection) as any ; },
        "enterpriseProxyServersAreAuthoritative": n => { windowsInformationProtection.enterpriseProxyServersAreAuthoritative = n.getBooleanValue() as any ; },
        "exemptAppLockerFiles": n => { windowsInformationProtection.exemptAppLockerFiles = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindowsInformationProtectionAppLockerFile) as any ; },
        "exemptApps": n => { windowsInformationProtection.exemptApps = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindowsInformationProtectionApp) as any ; },
        "iconsVisible": n => { windowsInformationProtection.iconsVisible = n.getBooleanValue() as any ; },
        "indexingEncryptedStoresOrItemsBlocked": n => { windowsInformationProtection.indexingEncryptedStoresOrItemsBlocked = n.getBooleanValue() as any ; },
        "isAssigned": n => { windowsInformationProtection.isAssigned = n.getBooleanValue() as any ; },
        "neutralDomainResources": n => { windowsInformationProtection.neutralDomainResources = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindowsInformationProtectionResourceCollection) as any ; },
        "protectedAppLockerFiles": n => { windowsInformationProtection.protectedAppLockerFiles = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindowsInformationProtectionAppLockerFile) as any ; },
        "protectedApps": n => { windowsInformationProtection.protectedApps = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindowsInformationProtectionApp) as any ; },
        "protectionUnderLockConfigRequired": n => { windowsInformationProtection.protectionUnderLockConfigRequired = n.getBooleanValue() as any ; },
        "revokeOnUnenrollDisabled": n => { windowsInformationProtection.revokeOnUnenrollDisabled = n.getBooleanValue() as any ; },
        "rightsManagementServicesTemplateId": n => { windowsInformationProtection.rightsManagementServicesTemplateId = n.getStringValue() as any ; },
        "smbAutoEncryptedFileExtensions": n => { windowsInformationProtection.smbAutoEncryptedFileExtensions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindowsInformationProtectionResourceCollection) as any ; },
    }
}

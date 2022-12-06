import {AndroidRequiredPasswordType} from './androidRequiredPasswordType';
import {deserializeIntoDeviceCompliancePolicy} from './deserializeIntoDeviceCompliancePolicy';
import {DeviceThreatProtectionLevel} from './deviceThreatProtectionLevel';
import {AndroidWorkProfileCompliancePolicy} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAndroidWorkProfileCompliancePolicy(androidWorkProfileCompliancePolicy: AndroidWorkProfileCompliancePolicy | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceCompliancePolicy(androidWorkProfileCompliancePolicy),
        "deviceThreatProtectionEnabled": n => { androidWorkProfileCompliancePolicy.deviceThreatProtectionEnabled = n.getBooleanValue() as any ; },
        "deviceThreatProtectionRequiredSecurityLevel": n => { androidWorkProfileCompliancePolicy.deviceThreatProtectionRequiredSecurityLevel = n.getEnumValue<DeviceThreatProtectionLevel>(DeviceThreatProtectionLevel) as any ; },
        "minAndroidSecurityPatchLevel": n => { androidWorkProfileCompliancePolicy.minAndroidSecurityPatchLevel = n.getStringValue() as any ; },
        "osMaximumVersion": n => { androidWorkProfileCompliancePolicy.osMaximumVersion = n.getStringValue() as any ; },
        "osMinimumVersion": n => { androidWorkProfileCompliancePolicy.osMinimumVersion = n.getStringValue() as any ; },
        "passwordExpirationDays": n => { androidWorkProfileCompliancePolicy.passwordExpirationDays = n.getNumberValue() as any ; },
        "passwordMinimumLength": n => { androidWorkProfileCompliancePolicy.passwordMinimumLength = n.getNumberValue() as any ; },
        "passwordMinutesOfInactivityBeforeLock": n => { androidWorkProfileCompliancePolicy.passwordMinutesOfInactivityBeforeLock = n.getNumberValue() as any ; },
        "passwordPreviousPasswordBlockCount": n => { androidWorkProfileCompliancePolicy.passwordPreviousPasswordBlockCount = n.getNumberValue() as any ; },
        "passwordRequired": n => { androidWorkProfileCompliancePolicy.passwordRequired = n.getBooleanValue() as any ; },
        "passwordRequiredType": n => { androidWorkProfileCompliancePolicy.passwordRequiredType = n.getEnumValue<AndroidRequiredPasswordType>(AndroidRequiredPasswordType) as any ; },
        "securityBlockJailbrokenDevices": n => { androidWorkProfileCompliancePolicy.securityBlockJailbrokenDevices = n.getBooleanValue() as any ; },
        "securityDisableUsbDebugging": n => { androidWorkProfileCompliancePolicy.securityDisableUsbDebugging = n.getBooleanValue() as any ; },
        "securityPreventInstallAppsFromUnknownSources": n => { androidWorkProfileCompliancePolicy.securityPreventInstallAppsFromUnknownSources = n.getBooleanValue() as any ; },
        "securityRequireCompanyPortalAppIntegrity": n => { androidWorkProfileCompliancePolicy.securityRequireCompanyPortalAppIntegrity = n.getBooleanValue() as any ; },
        "securityRequireGooglePlayServices": n => { androidWorkProfileCompliancePolicy.securityRequireGooglePlayServices = n.getBooleanValue() as any ; },
        "securityRequireSafetyNetAttestationBasicIntegrity": n => { androidWorkProfileCompliancePolicy.securityRequireSafetyNetAttestationBasicIntegrity = n.getBooleanValue() as any ; },
        "securityRequireSafetyNetAttestationCertifiedDevice": n => { androidWorkProfileCompliancePolicy.securityRequireSafetyNetAttestationCertifiedDevice = n.getBooleanValue() as any ; },
        "securityRequireUpToDateSecurityProviders": n => { androidWorkProfileCompliancePolicy.securityRequireUpToDateSecurityProviders = n.getBooleanValue() as any ; },
        "securityRequireVerifyApps": n => { androidWorkProfileCompliancePolicy.securityRequireVerifyApps = n.getBooleanValue() as any ; },
        "storageRequireEncryption": n => { androidWorkProfileCompliancePolicy.storageRequireEncryption = n.getBooleanValue() as any ; },
    }
}

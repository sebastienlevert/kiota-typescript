import {AndroidRequiredPasswordType} from './androidRequiredPasswordType';
import {deserializeIntoDeviceCompliancePolicy} from './deserializeIntoDeviceCompliancePolicy';
import {DeviceThreatProtectionLevel} from './deviceThreatProtectionLevel';
import {AndroidCompliancePolicy} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAndroidCompliancePolicy(androidCompliancePolicy: AndroidCompliancePolicy | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceCompliancePolicy(androidCompliancePolicy),
        "deviceThreatProtectionEnabled": n => { androidCompliancePolicy.deviceThreatProtectionEnabled = n.getBooleanValue() as any ; },
        "deviceThreatProtectionRequiredSecurityLevel": n => { androidCompliancePolicy.deviceThreatProtectionRequiredSecurityLevel = n.getEnumValue<DeviceThreatProtectionLevel>(DeviceThreatProtectionLevel) as any ; },
        "minAndroidSecurityPatchLevel": n => { androidCompliancePolicy.minAndroidSecurityPatchLevel = n.getStringValue() as any ; },
        "osMaximumVersion": n => { androidCompliancePolicy.osMaximumVersion = n.getStringValue() as any ; },
        "osMinimumVersion": n => { androidCompliancePolicy.osMinimumVersion = n.getStringValue() as any ; },
        "passwordExpirationDays": n => { androidCompliancePolicy.passwordExpirationDays = n.getNumberValue() as any ; },
        "passwordMinimumLength": n => { androidCompliancePolicy.passwordMinimumLength = n.getNumberValue() as any ; },
        "passwordMinutesOfInactivityBeforeLock": n => { androidCompliancePolicy.passwordMinutesOfInactivityBeforeLock = n.getNumberValue() as any ; },
        "passwordPreviousPasswordBlockCount": n => { androidCompliancePolicy.passwordPreviousPasswordBlockCount = n.getNumberValue() as any ; },
        "passwordRequired": n => { androidCompliancePolicy.passwordRequired = n.getBooleanValue() as any ; },
        "passwordRequiredType": n => { androidCompliancePolicy.passwordRequiredType = n.getEnumValue<AndroidRequiredPasswordType>(AndroidRequiredPasswordType) as any ; },
        "securityBlockJailbrokenDevices": n => { androidCompliancePolicy.securityBlockJailbrokenDevices = n.getBooleanValue() as any ; },
        "securityDisableUsbDebugging": n => { androidCompliancePolicy.securityDisableUsbDebugging = n.getBooleanValue() as any ; },
        "securityPreventInstallAppsFromUnknownSources": n => { androidCompliancePolicy.securityPreventInstallAppsFromUnknownSources = n.getBooleanValue() as any ; },
        "securityRequireCompanyPortalAppIntegrity": n => { androidCompliancePolicy.securityRequireCompanyPortalAppIntegrity = n.getBooleanValue() as any ; },
        "securityRequireGooglePlayServices": n => { androidCompliancePolicy.securityRequireGooglePlayServices = n.getBooleanValue() as any ; },
        "securityRequireSafetyNetAttestationBasicIntegrity": n => { androidCompliancePolicy.securityRequireSafetyNetAttestationBasicIntegrity = n.getBooleanValue() as any ; },
        "securityRequireSafetyNetAttestationCertifiedDevice": n => { androidCompliancePolicy.securityRequireSafetyNetAttestationCertifiedDevice = n.getBooleanValue() as any ; },
        "securityRequireUpToDateSecurityProviders": n => { androidCompliancePolicy.securityRequireUpToDateSecurityProviders = n.getBooleanValue() as any ; },
        "securityRequireVerifyApps": n => { androidCompliancePolicy.securityRequireVerifyApps = n.getBooleanValue() as any ; },
        "storageRequireEncryption": n => { androidCompliancePolicy.storageRequireEncryption = n.getBooleanValue() as any ; },
    }
}

import {DeviceHealthAttestationState} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceHealthAttestationState(deviceHealthAttestationState: DeviceHealthAttestationState | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "attestationIdentityKey": n => { deviceHealthAttestationState.attestationIdentityKey = n.getStringValue() as any ; },
        "bitLockerStatus": n => { deviceHealthAttestationState.bitLockerStatus = n.getStringValue() as any ; },
        "bootAppSecurityVersion": n => { deviceHealthAttestationState.bootAppSecurityVersion = n.getStringValue() as any ; },
        "bootDebugging": n => { deviceHealthAttestationState.bootDebugging = n.getStringValue() as any ; },
        "bootManagerSecurityVersion": n => { deviceHealthAttestationState.bootManagerSecurityVersion = n.getStringValue() as any ; },
        "bootManagerVersion": n => { deviceHealthAttestationState.bootManagerVersion = n.getStringValue() as any ; },
        "bootRevisionListInfo": n => { deviceHealthAttestationState.bootRevisionListInfo = n.getStringValue() as any ; },
        "codeIntegrity": n => { deviceHealthAttestationState.codeIntegrity = n.getStringValue() as any ; },
        "codeIntegrityCheckVersion": n => { deviceHealthAttestationState.codeIntegrityCheckVersion = n.getStringValue() as any ; },
        "codeIntegrityPolicy": n => { deviceHealthAttestationState.codeIntegrityPolicy = n.getStringValue() as any ; },
        "contentNamespaceUrl": n => { deviceHealthAttestationState.contentNamespaceUrl = n.getStringValue() as any ; },
        "contentVersion": n => { deviceHealthAttestationState.contentVersion = n.getStringValue() as any ; },
        "dataExcutionPolicy": n => { deviceHealthAttestationState.dataExcutionPolicy = n.getStringValue() as any ; },
        "deviceHealthAttestationStatus": n => { deviceHealthAttestationState.deviceHealthAttestationStatus = n.getStringValue() as any ; },
        "earlyLaunchAntiMalwareDriverProtection": n => { deviceHealthAttestationState.earlyLaunchAntiMalwareDriverProtection = n.getStringValue() as any ; },
        "healthAttestationSupportedStatus": n => { deviceHealthAttestationState.healthAttestationSupportedStatus = n.getStringValue() as any ; },
        "healthStatusMismatchInfo": n => { deviceHealthAttestationState.healthStatusMismatchInfo = n.getStringValue() as any ; },
        "issuedDateTime": n => { deviceHealthAttestationState.issuedDateTime = n.getDateValue() as any ; },
        "lastUpdateDateTime": n => { deviceHealthAttestationState.lastUpdateDateTime = n.getStringValue() as any ; },
        "operatingSystemKernelDebugging": n => { deviceHealthAttestationState.operatingSystemKernelDebugging = n.getStringValue() as any ; },
        "operatingSystemRevListInfo": n => { deviceHealthAttestationState.operatingSystemRevListInfo = n.getStringValue() as any ; },
        "pcr0": n => { deviceHealthAttestationState.pcr0 = n.getStringValue() as any ; },
        "pcrHashAlgorithm": n => { deviceHealthAttestationState.pcrHashAlgorithm = n.getStringValue() as any ; },
        "resetCount": n => { deviceHealthAttestationState.resetCount = n.getNumberValue() as any ; },
        "restartCount": n => { deviceHealthAttestationState.restartCount = n.getNumberValue() as any ; },
        "safeMode": n => { deviceHealthAttestationState.safeMode = n.getStringValue() as any ; },
        "secureBoot": n => { deviceHealthAttestationState.secureBoot = n.getStringValue() as any ; },
        "secureBootConfigurationPolicyFingerPrint": n => { deviceHealthAttestationState.secureBootConfigurationPolicyFingerPrint = n.getStringValue() as any ; },
        "testSigning": n => { deviceHealthAttestationState.testSigning = n.getStringValue() as any ; },
        "tpmVersion": n => { deviceHealthAttestationState.tpmVersion = n.getStringValue() as any ; },
        "virtualSecureMode": n => { deviceHealthAttestationState.virtualSecureMode = n.getStringValue() as any ; },
        "windowsPE": n => { deviceHealthAttestationState.windowsPE = n.getStringValue() as any ; },
    }
}

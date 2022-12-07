import {ComplianceStatus} from './complianceStatus';
import {deserializeIntoDeviceCompliancePolicySettingState} from './deserializeIntoDeviceCompliancePolicySettingState';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceCompliancePolicyState} from './index';
import {PolicyPlatformType} from './policyPlatformType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceCompliancePolicyState(deviceCompliancePolicyState: DeviceCompliancePolicyState | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceCompliancePolicyState),
        "displayName": n => { deviceCompliancePolicyState.displayName = n.getStringValue() as any ; },
        "platformType": n => { deviceCompliancePolicyState.platformType = n.getEnumValue<PolicyPlatformType>(PolicyPlatformType) as any ; },
        "settingCount": n => { deviceCompliancePolicyState.settingCount = n.getNumberValue() as any ; },
        "settingStates": n => { deviceCompliancePolicyState.settingStates = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceCompliancePolicySettingState) as any ; },
        "state": n => { deviceCompliancePolicyState.state = n.getEnumValue<ComplianceStatus>(ComplianceStatus) as any ; },
        "userId": n => { deviceCompliancePolicyState.userId = n.getStringValue() as any ; },
        "userPrincipalName": n => { deviceCompliancePolicyState.userPrincipalName = n.getStringValue() as any ; },
        "version": n => { deviceCompliancePolicyState.version = n.getNumberValue() as any ; },
    }
}

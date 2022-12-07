import {ComplianceStatus} from './complianceStatus';
import {deserializeIntoDeviceConfigurationSettingState} from './deserializeIntoDeviceConfigurationSettingState';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceConfigurationState} from './index';
import {PolicyPlatformType} from './policyPlatformType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceConfigurationState(deviceConfigurationState: DeviceConfigurationState | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceConfigurationState),
        "displayName": n => { deviceConfigurationState.displayName = n.getStringValue() as any ; },
        "platformType": n => { deviceConfigurationState.platformType = n.getEnumValue<PolicyPlatformType>(PolicyPlatformType) as any ; },
        "settingCount": n => { deviceConfigurationState.settingCount = n.getNumberValue() as any ; },
        "settingStates": n => { deviceConfigurationState.settingStates = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceConfigurationSettingState) as any ; },
        "state": n => { deviceConfigurationState.state = n.getEnumValue<ComplianceStatus>(ComplianceStatus) as any ; },
        "userId": n => { deviceConfigurationState.userId = n.getStringValue() as any ; },
        "userPrincipalName": n => { deviceConfigurationState.userPrincipalName = n.getStringValue() as any ; },
        "version": n => { deviceConfigurationState.version = n.getNumberValue() as any ; },
    }
}

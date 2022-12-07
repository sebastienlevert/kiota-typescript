import {ComplianceStatus} from './complianceStatus';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoManagedDeviceMobileAppConfigurationSettingState} from './deserializeIntoManagedDeviceMobileAppConfigurationSettingState';
import {ManagedDeviceMobileAppConfigurationState} from './index';
import {PolicyPlatformType} from './policyPlatformType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedDeviceMobileAppConfigurationState(managedDeviceMobileAppConfigurationState: ManagedDeviceMobileAppConfigurationState | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(managedDeviceMobileAppConfigurationState),
        "displayName": n => { managedDeviceMobileAppConfigurationState.displayName = n.getStringValue() as any ; },
        "platformType": n => { managedDeviceMobileAppConfigurationState.platformType = n.getEnumValue<PolicyPlatformType>(PolicyPlatformType) as any ; },
        "settingCount": n => { managedDeviceMobileAppConfigurationState.settingCount = n.getNumberValue() as any ; },
        "settingStates": n => { managedDeviceMobileAppConfigurationState.settingStates = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedDeviceMobileAppConfigurationSettingState) as any ; },
        "state": n => { managedDeviceMobileAppConfigurationState.state = n.getEnumValue<ComplianceStatus>(ComplianceStatus) as any ; },
        "userId": n => { managedDeviceMobileAppConfigurationState.userId = n.getStringValue() as any ; },
        "userPrincipalName": n => { managedDeviceMobileAppConfigurationState.userPrincipalName = n.getStringValue() as any ; },
        "version": n => { managedDeviceMobileAppConfigurationState.version = n.getNumberValue() as any ; },
    }
}

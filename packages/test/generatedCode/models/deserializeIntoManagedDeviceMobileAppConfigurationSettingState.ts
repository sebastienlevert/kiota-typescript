import {ComplianceStatus} from './complianceStatus';
import {deserializeIntoSettingSource} from './deserializeIntoSettingSource';
import {ManagedDeviceMobileAppConfigurationSettingState} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedDeviceMobileAppConfigurationSettingState(managedDeviceMobileAppConfigurationSettingState: ManagedDeviceMobileAppConfigurationSettingState | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "currentValue": n => { managedDeviceMobileAppConfigurationSettingState.currentValue = n.getStringValue() as any ; },
        "errorCode": n => { managedDeviceMobileAppConfigurationSettingState.errorCode = n.getNumberValue() as any ; },
        "errorDescription": n => { managedDeviceMobileAppConfigurationSettingState.errorDescription = n.getStringValue() as any ; },
        "instanceDisplayName": n => { managedDeviceMobileAppConfigurationSettingState.instanceDisplayName = n.getStringValue() as any ; },
        "setting": n => { managedDeviceMobileAppConfigurationSettingState.setting = n.getStringValue() as any ; },
        "settingInstanceId": n => { managedDeviceMobileAppConfigurationSettingState.settingInstanceId = n.getStringValue() as any ; },
        "settingName": n => { managedDeviceMobileAppConfigurationSettingState.settingName = n.getStringValue() as any ; },
        "sources": n => { managedDeviceMobileAppConfigurationSettingState.sources = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSettingSource) as any ; },
        "state": n => { managedDeviceMobileAppConfigurationSettingState.state = n.getEnumValue<ComplianceStatus>(ComplianceStatus) as any ; },
        "userEmail": n => { managedDeviceMobileAppConfigurationSettingState.userEmail = n.getStringValue() as any ; },
        "userId": n => { managedDeviceMobileAppConfigurationSettingState.userId = n.getStringValue() as any ; },
        "userName": n => { managedDeviceMobileAppConfigurationSettingState.userName = n.getStringValue() as any ; },
        "userPrincipalName": n => { managedDeviceMobileAppConfigurationSettingState.userPrincipalName = n.getStringValue() as any ; },
    }
}

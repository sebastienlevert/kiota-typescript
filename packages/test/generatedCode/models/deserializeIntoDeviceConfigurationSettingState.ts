import {ComplianceStatus} from './complianceStatus';
import {deserializeIntoSettingSource} from './deserializeIntoSettingSource';
import {DeviceConfigurationSettingState} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceConfigurationSettingState(deviceConfigurationSettingState: DeviceConfigurationSettingState | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "currentValue": n => { deviceConfigurationSettingState.currentValue = n.getStringValue() as any ; },
        "errorCode": n => { deviceConfigurationSettingState.errorCode = n.getNumberValue() as any ; },
        "errorDescription": n => { deviceConfigurationSettingState.errorDescription = n.getStringValue() as any ; },
        "instanceDisplayName": n => { deviceConfigurationSettingState.instanceDisplayName = n.getStringValue() as any ; },
        "setting": n => { deviceConfigurationSettingState.setting = n.getStringValue() as any ; },
        "settingInstanceId": n => { deviceConfigurationSettingState.settingInstanceId = n.getStringValue() as any ; },
        "settingName": n => { deviceConfigurationSettingState.settingName = n.getStringValue() as any ; },
        "sources": n => { deviceConfigurationSettingState.sources = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSettingSource) as any ; },
        "state": n => { deviceConfigurationSettingState.state = n.getEnumValue<ComplianceStatus>(ComplianceStatus) as any ; },
        "userEmail": n => { deviceConfigurationSettingState.userEmail = n.getStringValue() as any ; },
        "userId": n => { deviceConfigurationSettingState.userId = n.getStringValue() as any ; },
        "userName": n => { deviceConfigurationSettingState.userName = n.getStringValue() as any ; },
        "userPrincipalName": n => { deviceConfigurationSettingState.userPrincipalName = n.getStringValue() as any ; },
    }
}

import {ComplianceStatus} from './complianceStatus';
import {deserializeIntoSettingSource} from './deserializeIntoSettingSource';
import {DeviceCompliancePolicySettingState} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceCompliancePolicySettingState(deviceCompliancePolicySettingState: DeviceCompliancePolicySettingState | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "currentValue": n => { deviceCompliancePolicySettingState.currentValue = n.getStringValue() as any ; },
        "errorCode": n => { deviceCompliancePolicySettingState.errorCode = n.getNumberValue() as any ; },
        "errorDescription": n => { deviceCompliancePolicySettingState.errorDescription = n.getStringValue() as any ; },
        "instanceDisplayName": n => { deviceCompliancePolicySettingState.instanceDisplayName = n.getStringValue() as any ; },
        "setting": n => { deviceCompliancePolicySettingState.setting = n.getStringValue() as any ; },
        "settingInstanceId": n => { deviceCompliancePolicySettingState.settingInstanceId = n.getStringValue() as any ; },
        "settingName": n => { deviceCompliancePolicySettingState.settingName = n.getStringValue() as any ; },
        "sources": n => { deviceCompliancePolicySettingState.sources = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSettingSource) as any ; },
        "state": n => { deviceCompliancePolicySettingState.state = n.getEnumValue<ComplianceStatus>(ComplianceStatus) as any ; },
        "userEmail": n => { deviceCompliancePolicySettingState.userEmail = n.getStringValue() as any ; },
        "userId": n => { deviceCompliancePolicySettingState.userId = n.getStringValue() as any ; },
        "userName": n => { deviceCompliancePolicySettingState.userName = n.getStringValue() as any ; },
        "userPrincipalName": n => { deviceCompliancePolicySettingState.userPrincipalName = n.getStringValue() as any ; },
    }
}

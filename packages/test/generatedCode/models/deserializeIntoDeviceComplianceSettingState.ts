import {ComplianceStatus} from './complianceStatus';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceComplianceSettingState} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceComplianceSettingState(deviceComplianceSettingState: DeviceComplianceSettingState | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceComplianceSettingState),
        "complianceGracePeriodExpirationDateTime": n => { deviceComplianceSettingState.complianceGracePeriodExpirationDateTime = n.getDateValue() as any ; },
        "deviceId": n => { deviceComplianceSettingState.deviceId = n.getStringValue() as any ; },
        "deviceModel": n => { deviceComplianceSettingState.deviceModel = n.getStringValue() as any ; },
        "deviceName": n => { deviceComplianceSettingState.deviceName = n.getStringValue() as any ; },
        "setting": n => { deviceComplianceSettingState.setting = n.getStringValue() as any ; },
        "settingName": n => { deviceComplianceSettingState.settingName = n.getStringValue() as any ; },
        "state": n => { deviceComplianceSettingState.state = n.getEnumValue<ComplianceStatus>(ComplianceStatus) as any ; },
        "userEmail": n => { deviceComplianceSettingState.userEmail = n.getStringValue() as any ; },
        "userId": n => { deviceComplianceSettingState.userId = n.getStringValue() as any ; },
        "userName": n => { deviceComplianceSettingState.userName = n.getStringValue() as any ; },
        "userPrincipalName": n => { deviceComplianceSettingState.userPrincipalName = n.getStringValue() as any ; },
    }
}

import {DeviceManagementSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceManagementSettings(deviceManagementSettings: DeviceManagementSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "deviceComplianceCheckinThresholdDays": n => { deviceManagementSettings.deviceComplianceCheckinThresholdDays = n.getNumberValue() as any ; },
        "isScheduledActionEnabled": n => { deviceManagementSettings.isScheduledActionEnabled = n.getBooleanValue() as any ; },
        "@odata.type": n => { deviceManagementSettings.odataType = n.getStringValue() as any ; },
        "secureByDefault": n => { deviceManagementSettings.secureByDefault = n.getBooleanValue() as any ; },
    }
}

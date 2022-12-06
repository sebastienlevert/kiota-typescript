import {deserializeIntoEntity} from './deserializeIntoEntity';
import {SettingStateDeviceSummary} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSettingStateDeviceSummary(settingStateDeviceSummary: SettingStateDeviceSummary | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(settingStateDeviceSummary),
        "compliantDeviceCount": n => { settingStateDeviceSummary.compliantDeviceCount = n.getNumberValue() as any ; },
        "conflictDeviceCount": n => { settingStateDeviceSummary.conflictDeviceCount = n.getNumberValue() as any ; },
        "errorDeviceCount": n => { settingStateDeviceSummary.errorDeviceCount = n.getNumberValue() as any ; },
        "instancePath": n => { settingStateDeviceSummary.instancePath = n.getStringValue() as any ; },
        "nonCompliantDeviceCount": n => { settingStateDeviceSummary.nonCompliantDeviceCount = n.getNumberValue() as any ; },
        "notApplicableDeviceCount": n => { settingStateDeviceSummary.notApplicableDeviceCount = n.getNumberValue() as any ; },
        "remediatedDeviceCount": n => { settingStateDeviceSummary.remediatedDeviceCount = n.getNumberValue() as any ; },
        "settingName": n => { settingStateDeviceSummary.settingName = n.getStringValue() as any ; },
        "unknownDeviceCount": n => { settingStateDeviceSummary.unknownDeviceCount = n.getNumberValue() as any ; },
    }
}

import {deserializeIntoDeviceComplianceSettingState} from './deserializeIntoDeviceComplianceSettingState';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceCompliancePolicySettingStateSummary} from './index';
import {PolicyPlatformType} from './policyPlatformType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceCompliancePolicySettingStateSummary(deviceCompliancePolicySettingStateSummary: DeviceCompliancePolicySettingStateSummary | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceCompliancePolicySettingStateSummary),
        "compliantDeviceCount": n => { deviceCompliancePolicySettingStateSummary.compliantDeviceCount = n.getNumberValue() as any ; },
        "conflictDeviceCount": n => { deviceCompliancePolicySettingStateSummary.conflictDeviceCount = n.getNumberValue() as any ; },
        "deviceComplianceSettingStates": n => { deviceCompliancePolicySettingStateSummary.deviceComplianceSettingStates = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceComplianceSettingState) as any ; },
        "errorDeviceCount": n => { deviceCompliancePolicySettingStateSummary.errorDeviceCount = n.getNumberValue() as any ; },
        "nonCompliantDeviceCount": n => { deviceCompliancePolicySettingStateSummary.nonCompliantDeviceCount = n.getNumberValue() as any ; },
        "notApplicableDeviceCount": n => { deviceCompliancePolicySettingStateSummary.notApplicableDeviceCount = n.getNumberValue() as any ; },
        "platformType": n => { deviceCompliancePolicySettingStateSummary.platformType = n.getEnumValue<PolicyPlatformType>(PolicyPlatformType) as any ; },
        "remediatedDeviceCount": n => { deviceCompliancePolicySettingStateSummary.remediatedDeviceCount = n.getNumberValue() as any ; },
        "setting": n => { deviceCompliancePolicySettingStateSummary.setting = n.getStringValue() as any ; },
        "settingName": n => { deviceCompliancePolicySettingStateSummary.settingName = n.getStringValue() as any ; },
        "unknownDeviceCount": n => { deviceCompliancePolicySettingStateSummary.unknownDeviceCount = n.getNumberValue() as any ; },
    }
}

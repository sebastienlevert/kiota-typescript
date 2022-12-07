import {ComplianceStatus} from './complianceStatus';
import {DeviceCompliancePolicySettingState} from './index';
import {serializeSettingSource} from './serializeSettingSource';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceCompliancePolicySettingState(writer: SerializationWriter, deviceCompliancePolicySettingState: DeviceCompliancePolicySettingState | undefined = {}) : void {
            writer.writeStringValue("currentValue", deviceCompliancePolicySettingState.currentValue);
            writer.writeNumberValue("errorCode", deviceCompliancePolicySettingState.errorCode);
            writer.writeStringValue("errorDescription", deviceCompliancePolicySettingState.errorDescription);
            writer.writeStringValue("instanceDisplayName", deviceCompliancePolicySettingState.instanceDisplayName);
            writer.writeStringValue("setting", deviceCompliancePolicySettingState.setting);
            writer.writeStringValue("settingInstanceId", deviceCompliancePolicySettingState.settingInstanceId);
            writer.writeStringValue("settingName", deviceCompliancePolicySettingState.settingName);
            writer.writeCollectionOfObjectValuesFromMethod("sources", deviceCompliancePolicySettingState.sources as any, serializeSettingSource);
            writer.writeEnumValue<ComplianceStatus>("state", deviceCompliancePolicySettingState.state);
            writer.writeStringValue("userEmail", deviceCompliancePolicySettingState.userEmail);
            writer.writeStringValue("userId", deviceCompliancePolicySettingState.userId);
            writer.writeStringValue("userName", deviceCompliancePolicySettingState.userName);
            writer.writeStringValue("userPrincipalName", deviceCompliancePolicySettingState.userPrincipalName);
}

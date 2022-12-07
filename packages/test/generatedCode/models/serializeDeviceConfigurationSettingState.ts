import {ComplianceStatus} from './complianceStatus';
import {DeviceConfigurationSettingState} from './index';
import {serializeSettingSource} from './serializeSettingSource';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceConfigurationSettingState(writer: SerializationWriter, deviceConfigurationSettingState: DeviceConfigurationSettingState | undefined = {}) : void {
            writer.writeStringValue("currentValue", deviceConfigurationSettingState.currentValue);
            writer.writeNumberValue("errorCode", deviceConfigurationSettingState.errorCode);
            writer.writeStringValue("errorDescription", deviceConfigurationSettingState.errorDescription);
            writer.writeStringValue("instanceDisplayName", deviceConfigurationSettingState.instanceDisplayName);
            writer.writeStringValue("setting", deviceConfigurationSettingState.setting);
            writer.writeStringValue("settingInstanceId", deviceConfigurationSettingState.settingInstanceId);
            writer.writeStringValue("settingName", deviceConfigurationSettingState.settingName);
            writer.writeCollectionOfObjectValuesFromMethod("sources", deviceConfigurationSettingState.sources as any, serializeSettingSource);
            writer.writeEnumValue<ComplianceStatus>("state", deviceConfigurationSettingState.state);
            writer.writeStringValue("userEmail", deviceConfigurationSettingState.userEmail);
            writer.writeStringValue("userId", deviceConfigurationSettingState.userId);
            writer.writeStringValue("userName", deviceConfigurationSettingState.userName);
            writer.writeStringValue("userPrincipalName", deviceConfigurationSettingState.userPrincipalName);
}

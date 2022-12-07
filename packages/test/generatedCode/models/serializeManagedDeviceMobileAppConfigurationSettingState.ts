import {ComplianceStatus} from './complianceStatus';
import {ManagedDeviceMobileAppConfigurationSettingState} from './index';
import {serializeSettingSource} from './serializeSettingSource';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedDeviceMobileAppConfigurationSettingState(writer: SerializationWriter, managedDeviceMobileAppConfigurationSettingState: ManagedDeviceMobileAppConfigurationSettingState | undefined = {}) : void {
            writer.writeStringValue("currentValue", managedDeviceMobileAppConfigurationSettingState.currentValue);
            writer.writeNumberValue("errorCode", managedDeviceMobileAppConfigurationSettingState.errorCode);
            writer.writeStringValue("errorDescription", managedDeviceMobileAppConfigurationSettingState.errorDescription);
            writer.writeStringValue("instanceDisplayName", managedDeviceMobileAppConfigurationSettingState.instanceDisplayName);
            writer.writeStringValue("setting", managedDeviceMobileAppConfigurationSettingState.setting);
            writer.writeStringValue("settingInstanceId", managedDeviceMobileAppConfigurationSettingState.settingInstanceId);
            writer.writeStringValue("settingName", managedDeviceMobileAppConfigurationSettingState.settingName);
            writer.writeCollectionOfObjectValuesFromMethod("sources", managedDeviceMobileAppConfigurationSettingState.sources as any, serializeSettingSource);
            writer.writeEnumValue<ComplianceStatus>("state", managedDeviceMobileAppConfigurationSettingState.state);
            writer.writeStringValue("userEmail", managedDeviceMobileAppConfigurationSettingState.userEmail);
            writer.writeStringValue("userId", managedDeviceMobileAppConfigurationSettingState.userId);
            writer.writeStringValue("userName", managedDeviceMobileAppConfigurationSettingState.userName);
            writer.writeStringValue("userPrincipalName", managedDeviceMobileAppConfigurationSettingState.userPrincipalName);
}

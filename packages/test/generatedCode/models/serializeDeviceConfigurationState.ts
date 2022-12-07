import {ComplianceStatus} from './complianceStatus';
import {DeviceConfigurationState} from './index';
import {PolicyPlatformType} from './policyPlatformType';
import {serializeDeviceConfigurationSettingState} from './serializeDeviceConfigurationSettingState';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceConfigurationState(writer: SerializationWriter, deviceConfigurationState: DeviceConfigurationState | undefined = {}) : void {
        serializeEntity(writer, deviceConfigurationState)
            writer.writeStringValue("displayName", deviceConfigurationState.displayName);
            writer.writeEnumValue<PolicyPlatformType>("platformType", deviceConfigurationState.platformType);
            writer.writeNumberValue("settingCount", deviceConfigurationState.settingCount);
            writer.writeCollectionOfObjectValuesFromMethod("settingStates", deviceConfigurationState.settingStates as any, serializeDeviceConfigurationSettingState);
            writer.writeEnumValue<ComplianceStatus>("state", deviceConfigurationState.state);
            writer.writeStringValue("userId", deviceConfigurationState.userId);
            writer.writeStringValue("userPrincipalName", deviceConfigurationState.userPrincipalName);
            writer.writeNumberValue("version", deviceConfigurationState.version);
}

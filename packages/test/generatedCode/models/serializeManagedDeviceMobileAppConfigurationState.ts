import {ComplianceStatus} from './complianceStatus';
import {ManagedDeviceMobileAppConfigurationState} from './index';
import {PolicyPlatformType} from './policyPlatformType';
import {serializeEntity} from './serializeEntity';
import {serializeManagedDeviceMobileAppConfigurationSettingState} from './serializeManagedDeviceMobileAppConfigurationSettingState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedDeviceMobileAppConfigurationState(writer: SerializationWriter, managedDeviceMobileAppConfigurationState: ManagedDeviceMobileAppConfigurationState | undefined = {}) : void {
        serializeEntity(writer, managedDeviceMobileAppConfigurationState)
            writer.writeStringValue("displayName", managedDeviceMobileAppConfigurationState.displayName);
            writer.writeEnumValue<PolicyPlatformType>("platformType", managedDeviceMobileAppConfigurationState.platformType);
            writer.writeNumberValue("settingCount", managedDeviceMobileAppConfigurationState.settingCount);
            writer.writeCollectionOfObjectValuesFromMethod("settingStates", managedDeviceMobileAppConfigurationState.settingStates as any, serializeManagedDeviceMobileAppConfigurationSettingState);
            writer.writeEnumValue<ComplianceStatus>("state", managedDeviceMobileAppConfigurationState.state);
            writer.writeStringValue("userId", managedDeviceMobileAppConfigurationState.userId);
            writer.writeStringValue("userPrincipalName", managedDeviceMobileAppConfigurationState.userPrincipalName);
            writer.writeNumberValue("version", managedDeviceMobileAppConfigurationState.version);
}

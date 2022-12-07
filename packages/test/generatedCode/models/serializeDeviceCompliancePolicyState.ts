import {ComplianceStatus} from './complianceStatus';
import {DeviceCompliancePolicyState} from './index';
import {PolicyPlatformType} from './policyPlatformType';
import {serializeDeviceCompliancePolicySettingState} from './serializeDeviceCompliancePolicySettingState';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceCompliancePolicyState(writer: SerializationWriter, deviceCompliancePolicyState: DeviceCompliancePolicyState | undefined = {}) : void {
        serializeEntity(writer, deviceCompliancePolicyState)
            writer.writeStringValue("displayName", deviceCompliancePolicyState.displayName);
            writer.writeEnumValue<PolicyPlatformType>("platformType", deviceCompliancePolicyState.platformType);
            writer.writeNumberValue("settingCount", deviceCompliancePolicyState.settingCount);
            writer.writeCollectionOfObjectValuesFromMethod("settingStates", deviceCompliancePolicyState.settingStates as any, serializeDeviceCompliancePolicySettingState);
            writer.writeEnumValue<ComplianceStatus>("state", deviceCompliancePolicyState.state);
            writer.writeStringValue("userId", deviceCompliancePolicyState.userId);
            writer.writeStringValue("userPrincipalName", deviceCompliancePolicyState.userPrincipalName);
            writer.writeNumberValue("version", deviceCompliancePolicyState.version);
}

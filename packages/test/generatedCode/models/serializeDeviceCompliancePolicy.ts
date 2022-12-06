import {DeviceCompliancePolicy} from './index';
import {serializeDeviceComplianceDeviceOverview} from './serializeDeviceComplianceDeviceOverview';
import {serializeDeviceComplianceDeviceStatus} from './serializeDeviceComplianceDeviceStatus';
import {serializeDeviceCompliancePolicyAssignment} from './serializeDeviceCompliancePolicyAssignment';
import {serializeDeviceComplianceScheduledActionForRule} from './serializeDeviceComplianceScheduledActionForRule';
import {serializeDeviceComplianceUserOverview} from './serializeDeviceComplianceUserOverview';
import {serializeDeviceComplianceUserStatus} from './serializeDeviceComplianceUserStatus';
import {serializeEntity} from './serializeEntity';
import {serializeSettingStateDeviceSummary} from './serializeSettingStateDeviceSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceCompliancePolicy(writer: SerializationWriter, deviceCompliancePolicy: DeviceCompliancePolicy | undefined = {}) : void {
        serializeEntity(writer, deviceCompliancePolicy)
            writer.writeCollectionOfObjectValuesFromMethod("assignments", deviceCompliancePolicy.assignments as any, serializeDeviceCompliancePolicyAssignment);
            writer.writeDateValue("createdDateTime", deviceCompliancePolicy.createdDateTime);
            writer.writeStringValue("description", deviceCompliancePolicy.description);
            writer.writeCollectionOfObjectValuesFromMethod("deviceSettingStateSummaries", deviceCompliancePolicy.deviceSettingStateSummaries as any, serializeSettingStateDeviceSummary);
            writer.writeCollectionOfObjectValuesFromMethod("deviceStatuses", deviceCompliancePolicy.deviceStatuses as any, serializeDeviceComplianceDeviceStatus);
            writer.writeObjectValueFromMethod("deviceStatusOverview", deviceCompliancePolicy.deviceStatusOverview as any, serializeDeviceComplianceDeviceOverview);
            writer.writeStringValue("displayName", deviceCompliancePolicy.displayName);
            writer.writeDateValue("lastModifiedDateTime", deviceCompliancePolicy.lastModifiedDateTime);
            writer.writeCollectionOfObjectValuesFromMethod("scheduledActionsForRule", deviceCompliancePolicy.scheduledActionsForRule as any, serializeDeviceComplianceScheduledActionForRule);
            writer.writeCollectionOfObjectValuesFromMethod("userStatuses", deviceCompliancePolicy.userStatuses as any, serializeDeviceComplianceUserStatus);
            writer.writeObjectValueFromMethod("userStatusOverview", deviceCompliancePolicy.userStatusOverview as any, serializeDeviceComplianceUserOverview);
            writer.writeNumberValue("version", deviceCompliancePolicy.version);
}

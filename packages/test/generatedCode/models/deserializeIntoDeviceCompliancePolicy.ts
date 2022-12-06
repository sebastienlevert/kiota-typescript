import {deserializeIntoDeviceComplianceDeviceOverview} from './deserializeIntoDeviceComplianceDeviceOverview';
import {deserializeIntoDeviceComplianceDeviceStatus} from './deserializeIntoDeviceComplianceDeviceStatus';
import {deserializeIntoDeviceCompliancePolicyAssignment} from './deserializeIntoDeviceCompliancePolicyAssignment';
import {deserializeIntoDeviceComplianceScheduledActionForRule} from './deserializeIntoDeviceComplianceScheduledActionForRule';
import {deserializeIntoDeviceComplianceUserOverview} from './deserializeIntoDeviceComplianceUserOverview';
import {deserializeIntoDeviceComplianceUserStatus} from './deserializeIntoDeviceComplianceUserStatus';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoSettingStateDeviceSummary} from './deserializeIntoSettingStateDeviceSummary';
import {DeviceCompliancePolicy} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceCompliancePolicy(deviceCompliancePolicy: DeviceCompliancePolicy | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceCompliancePolicy),
        "assignments": n => { deviceCompliancePolicy.assignments = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceCompliancePolicyAssignment) as any ; },
        "createdDateTime": n => { deviceCompliancePolicy.createdDateTime = n.getDateValue() as any ; },
        "description": n => { deviceCompliancePolicy.description = n.getStringValue() as any ; },
        "deviceSettingStateSummaries": n => { deviceCompliancePolicy.deviceSettingStateSummaries = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSettingStateDeviceSummary) as any ; },
        "deviceStatuses": n => { deviceCompliancePolicy.deviceStatuses = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceComplianceDeviceStatus) as any ; },
        "deviceStatusOverview": n => { deviceCompliancePolicy.deviceStatusOverview = n.getObject(deserializeIntoDeviceComplianceDeviceOverview) as any ; },
        "displayName": n => { deviceCompliancePolicy.displayName = n.getStringValue() as any ; },
        "lastModifiedDateTime": n => { deviceCompliancePolicy.lastModifiedDateTime = n.getDateValue() as any ; },
        "scheduledActionsForRule": n => { deviceCompliancePolicy.scheduledActionsForRule = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceComplianceScheduledActionForRule) as any ; },
        "userStatuses": n => { deviceCompliancePolicy.userStatuses = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceComplianceUserStatus) as any ; },
        "userStatusOverview": n => { deviceCompliancePolicy.userStatusOverview = n.getObject(deserializeIntoDeviceComplianceUserOverview) as any ; },
        "version": n => { deviceCompliancePolicy.version = n.getNumberValue() as any ; },
    }
}

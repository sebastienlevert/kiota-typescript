import {ComplianceManagementPartnerAssignment} from './index';
import {serializeDeviceAndAppManagementAssignmentTarget} from './serializeDeviceAndAppManagementAssignmentTarget';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeComplianceManagementPartnerAssignment(writer: SerializationWriter, complianceManagementPartnerAssignment: ComplianceManagementPartnerAssignment | undefined = {}) : void {
            writer.writeStringValue("@odata.type", complianceManagementPartnerAssignment.odataType);
            writer.writeObjectValueFromMethod("target", complianceManagementPartnerAssignment.target as any, serializeDeviceAndAppManagementAssignmentTarget);
}

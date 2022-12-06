import {deserializeIntoDeviceAndAppManagementAssignmentTarget} from './deserializeIntoDeviceAndAppManagementAssignmentTarget';
import {ComplianceManagementPartnerAssignment} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoComplianceManagementPartnerAssignment(complianceManagementPartnerAssignment: ComplianceManagementPartnerAssignment | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { complianceManagementPartnerAssignment.odataType = n.getStringValue() as any ; },
        "target": n => { complianceManagementPartnerAssignment.target = n.getObject(deserializeIntoDeviceAndAppManagementAssignmentTarget) as any ; },
    }
}

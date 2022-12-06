import {AccessPackageAssignmentRequestRequirements} from './index';
import {serializeEntitlementManagementSchedule} from './serializeEntitlementManagementSchedule';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageAssignmentRequestRequirements(writer: SerializationWriter, accessPackageAssignmentRequestRequirements: AccessPackageAssignmentRequestRequirements | undefined = {}) : void {
            writer.writeBooleanValue("allowCustomAssignmentSchedule", accessPackageAssignmentRequestRequirements.allowCustomAssignmentSchedule);
            writer.writeBooleanValue("isApprovalRequiredForAdd", accessPackageAssignmentRequestRequirements.isApprovalRequiredForAdd);
            writer.writeBooleanValue("isApprovalRequiredForUpdate", accessPackageAssignmentRequestRequirements.isApprovalRequiredForUpdate);
            writer.writeStringValue("@odata.type", accessPackageAssignmentRequestRequirements.odataType);
            writer.writeStringValue("policyDescription", accessPackageAssignmentRequestRequirements.policyDescription);
            writer.writeStringValue("policyDisplayName", accessPackageAssignmentRequestRequirements.policyDisplayName);
            writer.writeStringValue("policyId", accessPackageAssignmentRequestRequirements.policyId);
            writer.writeObjectValueFromMethod("schedule", accessPackageAssignmentRequestRequirements.schedule as any, serializeEntitlementManagementSchedule);
}

import {AccessPackageAssignmentApprovalSettings} from './index';
import {serializeAccessPackageApprovalStage} from './serializeAccessPackageApprovalStage';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageAssignmentApprovalSettings(writer: SerializationWriter, accessPackageAssignmentApprovalSettings: AccessPackageAssignmentApprovalSettings | undefined = {}) : void {
            writer.writeBooleanValue("isApprovalRequiredForAdd", accessPackageAssignmentApprovalSettings.isApprovalRequiredForAdd);
            writer.writeBooleanValue("isApprovalRequiredForUpdate", accessPackageAssignmentApprovalSettings.isApprovalRequiredForUpdate);
            writer.writeStringValue("@odata.type", accessPackageAssignmentApprovalSettings.odataType);
            writer.writeCollectionOfObjectValuesFromMethod("stages", accessPackageAssignmentApprovalSettings.stages as any, serializeAccessPackageApprovalStage);
}

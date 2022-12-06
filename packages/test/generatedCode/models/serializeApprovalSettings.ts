import {ApprovalSettings} from './index';
import {serializeUnifiedApprovalStage} from './serializeUnifiedApprovalStage';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApprovalSettings(writer: SerializationWriter, approvalSettings: ApprovalSettings | undefined = {}) : void {
            writer.writeStringValue("approvalMode", approvalSettings.approvalMode);
            writer.writeCollectionOfObjectValuesFromMethod("approvalStages", approvalSettings.approvalStages as any, serializeUnifiedApprovalStage);
            writer.writeBooleanValue("isApprovalRequired", approvalSettings.isApprovalRequired);
            writer.writeBooleanValue("isApprovalRequiredForExtension", approvalSettings.isApprovalRequiredForExtension);
            writer.writeBooleanValue("isRequestorJustificationRequired", approvalSettings.isRequestorJustificationRequired);
            writer.writeStringValue("@odata.type", approvalSettings.odataType);
}

import {UnifiedApprovalStage} from './index';
import {serializeSubjectSet} from './serializeSubjectSet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedApprovalStage(writer: SerializationWriter, unifiedApprovalStage: UnifiedApprovalStage | undefined = {}) : void {
            writer.writeNumberValue("approvalStageTimeOutInDays", unifiedApprovalStage.approvalStageTimeOutInDays);
            writer.writeCollectionOfObjectValuesFromMethod("escalationApprovers", unifiedApprovalStage.escalationApprovers as any, serializeSubjectSet);
            writer.writeNumberValue("escalationTimeInMinutes", unifiedApprovalStage.escalationTimeInMinutes);
            writer.writeBooleanValue("isApproverJustificationRequired", unifiedApprovalStage.isApproverJustificationRequired);
            writer.writeBooleanValue("isEscalationEnabled", unifiedApprovalStage.isEscalationEnabled);
            writer.writeStringValue("@odata.type", unifiedApprovalStage.odataType);
            writer.writeCollectionOfObjectValuesFromMethod("primaryApprovers", unifiedApprovalStage.primaryApprovers as any, serializeSubjectSet);
}

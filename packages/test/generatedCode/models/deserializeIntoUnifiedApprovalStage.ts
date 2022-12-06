import {deserializeIntoSubjectSet} from './deserializeIntoSubjectSet';
import {UnifiedApprovalStage} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedApprovalStage(unifiedApprovalStage: UnifiedApprovalStage | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "approvalStageTimeOutInDays": n => { unifiedApprovalStage.approvalStageTimeOutInDays = n.getNumberValue() as any ; },
        "escalationApprovers": n => { unifiedApprovalStage.escalationApprovers = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSubjectSet) as any ; },
        "escalationTimeInMinutes": n => { unifiedApprovalStage.escalationTimeInMinutes = n.getNumberValue() as any ; },
        "isApproverJustificationRequired": n => { unifiedApprovalStage.isApproverJustificationRequired = n.getBooleanValue() as any ; },
        "isEscalationEnabled": n => { unifiedApprovalStage.isEscalationEnabled = n.getBooleanValue() as any ; },
        "@odata.type": n => { unifiedApprovalStage.odataType = n.getStringValue() as any ; },
        "primaryApprovers": n => { unifiedApprovalStage.primaryApprovers = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSubjectSet) as any ; },
    }
}

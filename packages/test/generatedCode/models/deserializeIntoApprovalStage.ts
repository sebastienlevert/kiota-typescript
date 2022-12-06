import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoIdentity} from './deserializeIntoIdentity';
import {ApprovalStage} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApprovalStage(approvalStage: ApprovalStage | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(approvalStage),
        "assignedToMe": n => { approvalStage.assignedToMe = n.getBooleanValue() as any ; },
        "displayName": n => { approvalStage.displayName = n.getStringValue() as any ; },
        "justification": n => { approvalStage.justification = n.getStringValue() as any ; },
        "reviewedBy": n => { approvalStage.reviewedBy = n.getObject(deserializeIntoIdentity) as any ; },
        "reviewedDateTime": n => { approvalStage.reviewedDateTime = n.getDateValue() as any ; },
        "reviewResult": n => { approvalStage.reviewResult = n.getStringValue() as any ; },
        "status": n => { approvalStage.status = n.getStringValue() as any ; },
    }
}

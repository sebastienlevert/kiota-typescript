import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoIdentity} from './deserializeIntoIdentity';
import {ApprovalStep} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApprovalStep(approvalStep: ApprovalStep | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(approvalStep),
        "assignedToMe": n => { approvalStep.assignedToMe = n.getBooleanValue() as any ; },
        "displayName": n => { approvalStep.displayName = n.getStringValue() as any ; },
        "justification": n => { approvalStep.justification = n.getStringValue() as any ; },
        "reviewedBy": n => { approvalStep.reviewedBy = n.getObject(deserializeIntoIdentity) as any ; },
        "reviewedDateTime": n => { approvalStep.reviewedDateTime = n.getDateValue() as any ; },
        "reviewResult": n => { approvalStep.reviewResult = n.getStringValue() as any ; },
        "status": n => { approvalStep.status = n.getStringValue() as any ; },
    }
}

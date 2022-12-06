import {deserializeIntoAccessReviewInstanceDecisionItemResource} from './deserializeIntoAccessReviewInstanceDecisionItemResource';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoIdentity} from './deserializeIntoIdentity';
import {deserializeIntoUserIdentity} from './deserializeIntoUserIdentity';
import {AccessReviewInstanceDecisionItem} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewInstanceDecisionItem(accessReviewInstanceDecisionItem: AccessReviewInstanceDecisionItem | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(accessReviewInstanceDecisionItem),
        "accessReviewId": n => { accessReviewInstanceDecisionItem.accessReviewId = n.getStringValue() as any ; },
        "appliedBy": n => { accessReviewInstanceDecisionItem.appliedBy = n.getObject(deserializeIntoUserIdentity) as any ; },
        "appliedDateTime": n => { accessReviewInstanceDecisionItem.appliedDateTime = n.getDateValue() as any ; },
        "applyResult": n => { accessReviewInstanceDecisionItem.applyResult = n.getStringValue() as any ; },
        "decision": n => { accessReviewInstanceDecisionItem.decision = n.getStringValue() as any ; },
        "justification": n => { accessReviewInstanceDecisionItem.justification = n.getStringValue() as any ; },
        "principal": n => { accessReviewInstanceDecisionItem.principal = n.getObject(deserializeIntoIdentity) as any ; },
        "principalLink": n => { accessReviewInstanceDecisionItem.principalLink = n.getStringValue() as any ; },
        "recommendation": n => { accessReviewInstanceDecisionItem.recommendation = n.getStringValue() as any ; },
        "resource": n => { accessReviewInstanceDecisionItem.resource = n.getObject(deserializeIntoAccessReviewInstanceDecisionItemResource) as any ; },
        "resourceLink": n => { accessReviewInstanceDecisionItem.resourceLink = n.getStringValue() as any ; },
        "reviewedBy": n => { accessReviewInstanceDecisionItem.reviewedBy = n.getObject(deserializeIntoUserIdentity) as any ; },
        "reviewedDateTime": n => { accessReviewInstanceDecisionItem.reviewedDateTime = n.getDateValue() as any ; },
    }
}

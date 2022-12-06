import {deserializeIntoAccessReviewInstanceDecisionItem} from './deserializeIntoAccessReviewInstanceDecisionItem';
import {deserializeIntoAccessReviewReviewerScope} from './deserializeIntoAccessReviewReviewerScope';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {AccessReviewStage} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewStage(accessReviewStage: AccessReviewStage | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(accessReviewStage),
        "decisions": n => { accessReviewStage.decisions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessReviewInstanceDecisionItem) as any ; },
        "endDateTime": n => { accessReviewStage.endDateTime = n.getDateValue() as any ; },
        "fallbackReviewers": n => { accessReviewStage.fallbackReviewers = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessReviewReviewerScope) as any ; },
        "reviewers": n => { accessReviewStage.reviewers = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessReviewReviewerScope) as any ; },
        "startDateTime": n => { accessReviewStage.startDateTime = n.getDateValue() as any ; },
        "status": n => { accessReviewStage.status = n.getStringValue() as any ; },
    }
}

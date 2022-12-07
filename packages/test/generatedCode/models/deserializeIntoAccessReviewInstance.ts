import {deserializeIntoAccessReviewError} from './deserializeIntoAccessReviewError';
import {deserializeIntoAccessReviewInstanceDecisionItem} from './deserializeIntoAccessReviewInstanceDecisionItem';
import {deserializeIntoAccessReviewReviewer} from './deserializeIntoAccessReviewReviewer';
import {deserializeIntoAccessReviewReviewerScope} from './deserializeIntoAccessReviewReviewerScope';
import {deserializeIntoAccessReviewScheduleDefinition} from './deserializeIntoAccessReviewScheduleDefinition';
import {deserializeIntoAccessReviewScope} from './deserializeIntoAccessReviewScope';
import {deserializeIntoAccessReviewStage} from './deserializeIntoAccessReviewStage';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {AccessReviewInstance} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewInstance(accessReviewInstance: AccessReviewInstance | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(accessReviewInstance),
        "contactedReviewers": n => { accessReviewInstance.contactedReviewers = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessReviewReviewer) as any ; },
        "decisions": n => { accessReviewInstance.decisions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessReviewInstanceDecisionItem) as any ; },
        "definition": n => { accessReviewInstance.definition = n.getObject(deserializeIntoAccessReviewScheduleDefinition) as any ; },
        "endDateTime": n => { accessReviewInstance.endDateTime = n.getDateValue() as any ; },
        "errors": n => { accessReviewInstance.errors = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessReviewError) as any ; },
        "fallbackReviewers": n => { accessReviewInstance.fallbackReviewers = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessReviewReviewerScope) as any ; },
        "reviewers": n => { accessReviewInstance.reviewers = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessReviewReviewerScope) as any ; },
        "scope": n => { accessReviewInstance.scope = n.getObject(deserializeIntoAccessReviewScope) as any ; },
        "stages": n => { accessReviewInstance.stages = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessReviewStage) as any ; },
        "startDateTime": n => { accessReviewInstance.startDateTime = n.getDateValue() as any ; },
        "status": n => { accessReviewInstance.status = n.getStringValue() as any ; },
    }
}

import {AccessReviewStage} from './index';
import {serializeAccessReviewInstanceDecisionItem} from './serializeAccessReviewInstanceDecisionItem';
import {serializeAccessReviewReviewerScope} from './serializeAccessReviewReviewerScope';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewStage(writer: SerializationWriter, accessReviewStage: AccessReviewStage | undefined = {}) : void {
        serializeEntity(writer, accessReviewStage)
            writer.writeCollectionOfObjectValuesFromMethod("decisions", accessReviewStage.decisions as any, serializeAccessReviewInstanceDecisionItem);
            writer.writeDateValue("endDateTime", accessReviewStage.endDateTime);
            writer.writeCollectionOfObjectValuesFromMethod("fallbackReviewers", accessReviewStage.fallbackReviewers as any, serializeAccessReviewReviewerScope);
            writer.writeCollectionOfObjectValuesFromMethod("reviewers", accessReviewStage.reviewers as any, serializeAccessReviewReviewerScope);
            writer.writeDateValue("startDateTime", accessReviewStage.startDateTime);
            writer.writeStringValue("status", accessReviewStage.status);
}

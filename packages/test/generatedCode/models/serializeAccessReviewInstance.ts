import {AccessReviewInstance} from './index';
import {serializeAccessReviewError} from './serializeAccessReviewError';
import {serializeAccessReviewInstanceDecisionItem} from './serializeAccessReviewInstanceDecisionItem';
import {serializeAccessReviewReviewer} from './serializeAccessReviewReviewer';
import {serializeAccessReviewReviewerScope} from './serializeAccessReviewReviewerScope';
import {serializeAccessReviewScheduleDefinition} from './serializeAccessReviewScheduleDefinition';
import {serializeAccessReviewScope} from './serializeAccessReviewScope';
import {serializeAccessReviewStage} from './serializeAccessReviewStage';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewInstance(writer: SerializationWriter, accessReviewInstance: AccessReviewInstance | undefined = {}) : void {
        serializeEntity(writer, accessReviewInstance)
            writer.writeCollectionOfObjectValuesFromMethod("contactedReviewers", accessReviewInstance.contactedReviewers as any, serializeAccessReviewReviewer);
            writer.writeCollectionOfObjectValuesFromMethod("decisions", accessReviewInstance.decisions as any, serializeAccessReviewInstanceDecisionItem);
            writer.writeObjectValueFromMethod("definition", accessReviewInstance.definition as any, serializeAccessReviewScheduleDefinition);
            writer.writeDateValue("endDateTime", accessReviewInstance.endDateTime);
            writer.writeCollectionOfObjectValuesFromMethod("errors", accessReviewInstance.errors as any, serializeAccessReviewError);
            writer.writeCollectionOfObjectValuesFromMethod("fallbackReviewers", accessReviewInstance.fallbackReviewers as any, serializeAccessReviewReviewerScope);
            writer.writeCollectionOfObjectValuesFromMethod("reviewers", accessReviewInstance.reviewers as any, serializeAccessReviewReviewerScope);
            writer.writeObjectValueFromMethod("scope", accessReviewInstance.scope as any, serializeAccessReviewScope);
            writer.writeCollectionOfObjectValuesFromMethod("stages", accessReviewInstance.stages as any, serializeAccessReviewStage);
            writer.writeDateValue("startDateTime", accessReviewInstance.startDateTime);
            writer.writeStringValue("status", accessReviewInstance.status);
}

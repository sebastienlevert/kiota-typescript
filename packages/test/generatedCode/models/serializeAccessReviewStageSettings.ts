import {AccessReviewStageSettings} from './index';
import {serializeAccessReviewRecommendationInsightSetting} from './serializeAccessReviewRecommendationInsightSetting';
import {serializeAccessReviewReviewerScope} from './serializeAccessReviewReviewerScope';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewStageSettings(writer: SerializationWriter, accessReviewStageSettings: AccessReviewStageSettings | undefined = {}) : void {
            writer.writeCollectionOfPrimitiveValues<string>("decisionsThatWillMoveToNextStage", accessReviewStageSettings.decisionsThatWillMoveToNextStage);
            writer.writeCollectionOfPrimitiveValues<string>("dependsOn", accessReviewStageSettings.dependsOn);
            writer.writeNumberValue("durationInDays", accessReviewStageSettings.durationInDays);
            writer.writeCollectionOfObjectValuesFromMethod("fallbackReviewers", accessReviewStageSettings.fallbackReviewers as any, serializeAccessReviewReviewerScope);
            writer.writeCollectionOfObjectValuesFromMethod("recommendationInsightSettings", accessReviewStageSettings.recommendationInsightSettings as any, serializeAccessReviewRecommendationInsightSetting);
            writer.writeDurationValue("recommendationLookBackDuration", accessReviewStageSettings.recommendationLookBackDuration);
            writer.writeBooleanValue("recommendationsEnabled", accessReviewStageSettings.recommendationsEnabled);
            writer.writeCollectionOfObjectValuesFromMethod("reviewers", accessReviewStageSettings.reviewers as any, serializeAccessReviewReviewerScope);
            writer.writeStringValue("stageId", accessReviewStageSettings.stageId);
}

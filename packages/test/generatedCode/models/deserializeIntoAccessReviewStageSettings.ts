import {deserializeIntoAccessReviewReviewerScope} from './deserializeIntoAccessReviewReviewerScope';
import {AccessReviewStageSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewStageSettings(accessReviewStageSettings: AccessReviewStageSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "decisionsThatWillMoveToNextStage": n => { accessReviewStageSettings.decisionsThatWillMoveToNextStage = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "dependsOn": n => { accessReviewStageSettings.dependsOn = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "durationInDays": n => { accessReviewStageSettings.durationInDays = n.getNumberValue() as any ; },
        "fallbackReviewers": n => { accessReviewStageSettings.fallbackReviewers = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessReviewReviewerScope) as any ; },
        "@odata.type": n => { accessReviewStageSettings.odataType = n.getStringValue() as any ; },
        "recommendationsEnabled": n => { accessReviewStageSettings.recommendationsEnabled = n.getBooleanValue() as any ; },
        "reviewers": n => { accessReviewStageSettings.reviewers = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessReviewReviewerScope) as any ; },
        "stageId": n => { accessReviewStageSettings.stageId = n.getStringValue() as any ; },
    }
}

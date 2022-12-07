import {deserializeIntoAccessReviewApplyAction} from './deserializeIntoAccessReviewApplyAction';
import {deserializeIntoAccessReviewRecommendationInsightSetting} from './deserializeIntoAccessReviewRecommendationInsightSetting';
import {deserializeIntoPatternedRecurrence} from './deserializeIntoPatternedRecurrence';
import {AccessReviewScheduleSettings} from './index';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewScheduleSettings(accessReviewScheduleSettings: AccessReviewScheduleSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "applyActions": n => { accessReviewScheduleSettings.applyActions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessReviewApplyAction) as any ; },
        "autoApplyDecisionsEnabled": n => { accessReviewScheduleSettings.autoApplyDecisionsEnabled = n.getBooleanValue() as any ; },
        "decisionHistoriesForReviewersEnabled": n => { accessReviewScheduleSettings.decisionHistoriesForReviewersEnabled = n.getBooleanValue() as any ; },
        "defaultDecision": n => { accessReviewScheduleSettings.defaultDecision = n.getStringValue() as any ; },
        "defaultDecisionEnabled": n => { accessReviewScheduleSettings.defaultDecisionEnabled = n.getBooleanValue() as any ; },
        "instanceDurationInDays": n => { accessReviewScheduleSettings.instanceDurationInDays = n.getNumberValue() as any ; },
        "justificationRequiredOnApproval": n => { accessReviewScheduleSettings.justificationRequiredOnApproval = n.getBooleanValue() as any ; },
        "mailNotificationsEnabled": n => { accessReviewScheduleSettings.mailNotificationsEnabled = n.getBooleanValue() as any ; },
        "recommendationInsightSettings": n => { accessReviewScheduleSettings.recommendationInsightSettings = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessReviewRecommendationInsightSetting) as any ; },
        "recommendationLookBackDuration": n => { accessReviewScheduleSettings.recommendationLookBackDuration = n.getDurationValue() as any ; },
        "recommendationsEnabled": n => { accessReviewScheduleSettings.recommendationsEnabled = n.getBooleanValue() as any ; },
        "recurrence": n => { accessReviewScheduleSettings.recurrence = n.getObject(deserializeIntoPatternedRecurrence) as any ; },
        "reminderNotificationsEnabled": n => { accessReviewScheduleSettings.reminderNotificationsEnabled = n.getBooleanValue() as any ; },
    }
}

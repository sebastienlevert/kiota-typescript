import {AccessReviewScheduleSettings} from './index';
import {serializeAccessReviewApplyAction} from './serializeAccessReviewApplyAction';
import {serializePatternedRecurrence} from './serializePatternedRecurrence';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewScheduleSettings(writer: SerializationWriter, accessReviewScheduleSettings: AccessReviewScheduleSettings | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("applyActions", accessReviewScheduleSettings.applyActions as any, serializeAccessReviewApplyAction);
            writer.writeBooleanValue("autoApplyDecisionsEnabled", accessReviewScheduleSettings.autoApplyDecisionsEnabled);
            writer.writeBooleanValue("decisionHistoriesForReviewersEnabled", accessReviewScheduleSettings.decisionHistoriesForReviewersEnabled);
            writer.writeStringValue("defaultDecision", accessReviewScheduleSettings.defaultDecision);
            writer.writeBooleanValue("defaultDecisionEnabled", accessReviewScheduleSettings.defaultDecisionEnabled);
            writer.writeNumberValue("instanceDurationInDays", accessReviewScheduleSettings.instanceDurationInDays);
            writer.writeBooleanValue("justificationRequiredOnApproval", accessReviewScheduleSettings.justificationRequiredOnApproval);
            writer.writeBooleanValue("mailNotificationsEnabled", accessReviewScheduleSettings.mailNotificationsEnabled);
            writer.writeStringValue("@odata.type", accessReviewScheduleSettings.odataType);
            writer.writeBooleanValue("recommendationsEnabled", accessReviewScheduleSettings.recommendationsEnabled);
            writer.writeObjectValueFromMethod("recurrence", accessReviewScheduleSettings.recurrence as any, serializePatternedRecurrence);
            writer.writeBooleanValue("reminderNotificationsEnabled", accessReviewScheduleSettings.reminderNotificationsEnabled);
}

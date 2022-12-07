import {AccessReviewApplyAction, AccessReviewRecommendationInsightSetting, PatternedRecurrence} from './index';
import {AdditionalDataHolder, Duration, Parsable} from '@microsoft/kiota-abstractions';

export interface AccessReviewScheduleSettings extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Optional field. Describes the  actions to take once a review is complete. There are two types that are currently supported: removeAccessApplyAction (default) and disableAndDeleteUserApplyAction. Field only needs to be specified in the case of disableAndDeleteUserApplyAction. */
    applyActions?: AccessReviewApplyAction[];
    /** Indicates whether decisions are automatically applied. When set to false, an admin must apply the decisions manually once the reviewer completes the access review. When set to true, decisions are applied automatically after the access review instance duration ends, whether or not the reviewers have responded. Default value is false. */
    autoApplyDecisionsEnabled?: boolean;
    /** Indicates whether decisions on previous access review stages are available for reviewers on an accessReviewInstance with multiple subsequent stages. If not provided, the default is disabled (false). */
    decisionHistoriesForReviewersEnabled?: boolean;
    /** Decision chosen if defaultDecisionEnabled is enabled. Can be one of Approve, Deny, or Recommendation. */
    defaultDecision?: string;
    /** Indicates whether the default decision is enabled or disabled when reviewers do not respond. Default value is false. */
    defaultDecisionEnabled?: boolean;
    /** Duration of each recurrence of review (accessReviewInstance) in number of days. NOTE: If the stageSettings of the accessReviewScheduleDefinition object is defined, its durationInDays setting will be used instead of the value of this property. */
    instanceDurationInDays?: number;
    /** Indicates whether reviewers are required to provide justification with their decision. Default value is false. */
    justificationRequiredOnApproval?: boolean;
    /** Indicates whether emails are enabled or disabled. Default value is false. */
    mailNotificationsEnabled?: boolean;
    /** Optional. Describes the types of insights that aid reviewers to make access review decisions. NOTE: If the stageSettings of the accessReviewScheduleDefinition object is defined, its recommendationInsightSettings setting will be used instead of the value of this property. */
    recommendationInsightSettings?: AccessReviewRecommendationInsightSetting[];
    /** Optional field. Indicates the period of inactivity (with respect to the start date of the review instance) that recommendations will be configured from. The recommendation will be to deny if the user is inactive during the look-back duration. For reviews of groups and Azure AD roles, any duration is accepted. For reviews of applications, 30 days is the maximum duration. If not specified, the duration is 30 days. NOTE: If the stageSettings of the accessReviewScheduleDefinition object is defined, its recommendationLookBackDuration setting will be used instead of the value of this property. */
    recommendationLookBackDuration?: Duration;
    /** Indicates whether decision recommendations are enabled or disabled. NOTE: If the stageSettings of the accessReviewScheduleDefinition object is defined, its recommendationsEnabled setting will be used instead of the value of this property. */
    recommendationsEnabled?: boolean;
    /** The recurrence property */
    recurrence?: PatternedRecurrence;
    /** Indicates whether reminders are enabled or disabled. Default value is false. */
    reminderNotificationsEnabled?: boolean;
}

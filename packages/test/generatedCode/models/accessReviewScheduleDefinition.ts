import {AccessReviewInstance, AccessReviewNotificationRecipientItem, AccessReviewReviewerScope, AccessReviewScheduleSettings, AccessReviewScope, AccessReviewStageSettings, Entity, UserIdentity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessReviewScheduleDefinition extends Entity, Partial<Parsable> {
    /** Defines the list of additional users or group members to be notified of the access review progress. */
    additionalNotificationRecipients?: AccessReviewNotificationRecipientItem[];
    /** The backupReviewers property */
    backupReviewers?: AccessReviewReviewerScope[];
    /** The createdBy property */
    createdBy?: UserIdentity;
    /** Timestamp when the access review series was created. Supports $select. Read-only. */
    createdDateTime?: Date;
    /** Description provided by review creators to provide more context of the review to admins. Supports $select. */
    descriptionForAdmins?: string;
    /** Description provided  by review creators to provide more context of the review to reviewers. Reviewers will see this description in the email sent to them requesting their review. Email notifications support up to 256 characters. Supports $select. */
    descriptionForReviewers?: string;
    /** Name of the access review series. Supports $select and $orderBy. Required on create. */
    displayName?: string;
    /** This collection of reviewer scopes is used to define the list of fallback reviewers. These fallback reviewers will be notified to take action if no users are found from the list of reviewers specified. This could occur when either the group owner is specified as the reviewer but the group owner does not exist, or manager is specified as reviewer but a user's manager does not exist. See accessReviewReviewerScope. Replaces backupReviewers. Supports $select. NOTE: The value of this property will be ignored if fallback reviewers are assigned through the stageSettings property. */
    fallbackReviewers?: AccessReviewReviewerScope[];
    /** The instanceEnumerationScope property */
    instanceEnumerationScope?: AccessReviewScope;
    /** Set of access reviews instances for this access review series. Access reviews that do not recur will only have one instance; otherwise, there is an instance for each recurrence. */
    instances?: AccessReviewInstance[];
    /** Timestamp when the access review series was last modified. Supports $select. Read-only. */
    lastModifiedDateTime?: Date;
    /** This collection of access review scopes is used to define who are the reviewers. The reviewers property is only updatable if individual users are assigned as reviewers. Required on create. Supports $select. For examples of options for assigning reviewers, see Assign reviewers to your access review definition using the Microsoft Graph API. NOTE: The value of this property will be ignored if reviewers are assigned through the stageSettings property. */
    reviewers?: AccessReviewReviewerScope[];
    /** The scope property */
    scope?: AccessReviewScope;
    /** The settings property */
    settings?: AccessReviewScheduleSettings;
    /** Required only for a multi-stage access review to define the stages and their settings. You can break down each review instance into up to three sequential stages, where each stage can have a different set of reviewers, fallback reviewers, and settings. Stages will be created sequentially based on the dependsOn property. Optional.  When this property is defined, its settings are used instead of the corresponding settings in the accessReviewScheduleDefinition object and its settings, reviewers, and fallbackReviewers properties. */
    stageSettings?: AccessReviewStageSettings[];
    /** This read-only field specifies the status of an access review. The typical states include Initializing, NotStarted, Starting, InProgress, Completing, Completed, AutoReviewing, and AutoReviewed.  Supports $select, $orderby, and $filter (eq only). Read-only. */
    status?: string;
}

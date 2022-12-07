import {IdentitySet, PlannerAppliedCategories, PlannerAssignedToTaskBoardTaskFormat, PlannerAssignments, PlannerBucketTaskBoardTaskFormat, PlannerDelta, PlannerProgressTaskBoardTaskFormat, PlannerTaskCreation, PlannerTaskDetails} from './index';
import {PlannerPreviewType} from './plannerPreviewType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PlannerTask extends Partial<Parsable>, PlannerDelta {
    /** Number of checklist items with value set to false, representing incomplete items. */
    activeChecklistItemCount?: number;
    /** The appliedCategories property */
    appliedCategories?: PlannerAppliedCategories;
    /** The assignedToTaskBoardFormat property */
    assignedToTaskBoardFormat?: PlannerAssignedToTaskBoardTaskFormat;
    /** Hint used to order items of this type in a list view. The format is defined as outlined here. */
    assigneePriority?: string;
    /** The assignments property */
    assignments?: PlannerAssignments;
    /** Bucket ID to which the task belongs. The bucket needs to be in the plan that the task is in. It is 28 characters long and case-sensitive. Format validation is done on the service. */
    bucketId?: string;
    /** The bucketTaskBoardFormat property */
    bucketTaskBoardFormat?: PlannerBucketTaskBoardTaskFormat;
    /** Number of checklist items that are present on the task. */
    checklistItemCount?: number;
    /** The completedBy property */
    completedBy?: IdentitySet;
    /** Read-only. Date and time at which the 'percentComplete' of the task is set to '100'. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    completedDateTime?: Date;
    /** Thread ID of the conversation on the task. This is the ID of the conversation thread object created in the group. */
    conversationThreadId?: string;
    /** The createdBy property */
    createdBy?: IdentitySet;
    /** Read-only. Date and time at which the task is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    createdDateTime?: Date;
    /** The creationSource property */
    creationSource?: PlannerTaskCreation;
    /** The details property */
    details?: PlannerTaskDetails;
    /** Date and time at which the task is due. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    dueDateTime?: Date;
    /** Read-only. Value is true if the details object of the task has a non-empty description and false otherwise. */
    hasDescription?: boolean;
    /** Hint used to order items of this type in a list view. The format is defined as outlined here. */
    orderHint?: string;
    /** Percentage of task completion. When set to 100, the task is considered completed. */
    percentComplete?: number;
    /** Plan ID to which the task belongs. */
    planId?: string;
    /** The previewType property */
    previewType?: PlannerPreviewType;
    /** Priority of the task. Valid range of values is between 0 and 10 (inclusive), with increasing value being lower priority (0 has the highest priority and 10 has the lowest priority).  Currently, Planner interprets values 0 and 1 as 'urgent', 2 and 3 and 4 as 'important', 5, 6, and 7 as 'medium', and 8, 9, and 10 as 'low'.  Currently, Planner sets the value 1 for 'urgent', 3 for 'important', 5 for 'medium', and 9 for 'low'. */
    priority?: number;
    /** The progressTaskBoardFormat property */
    progressTaskBoardFormat?: PlannerProgressTaskBoardTaskFormat;
    /** Number of external references that exist on the task. */
    referenceCount?: number;
    /** Date and time at which the task starts. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    startDateTime?: Date;
    /** Title of the task. */
    title?: string;
}

import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {deserializeIntoPlannerAppliedCategories} from './deserializeIntoPlannerAppliedCategories';
import {deserializeIntoPlannerAssignedToTaskBoardTaskFormat} from './deserializeIntoPlannerAssignedToTaskBoardTaskFormat';
import {deserializeIntoPlannerAssignments} from './deserializeIntoPlannerAssignments';
import {deserializeIntoPlannerBucketTaskBoardTaskFormat} from './deserializeIntoPlannerBucketTaskBoardTaskFormat';
import {deserializeIntoPlannerDelta} from './deserializeIntoPlannerDelta';
import {deserializeIntoPlannerProgressTaskBoardTaskFormat} from './deserializeIntoPlannerProgressTaskBoardTaskFormat';
import {deserializeIntoPlannerTaskCreation} from './deserializeIntoPlannerTaskCreation';
import {deserializeIntoPlannerTaskDetails} from './deserializeIntoPlannerTaskDetails';
import {PlannerTask} from './index';
import {PlannerPreviewType} from './plannerPreviewType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerTask(plannerTask: PlannerTask | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoPlannerDelta(plannerTask),
        "activeChecklistItemCount": n => { plannerTask.activeChecklistItemCount = n.getNumberValue() as any ; },
        "appliedCategories": n => { plannerTask.appliedCategories = n.getObject(deserializeIntoPlannerAppliedCategories) as any ; },
        "assignedToTaskBoardFormat": n => { plannerTask.assignedToTaskBoardFormat = n.getObject(deserializeIntoPlannerAssignedToTaskBoardTaskFormat) as any ; },
        "assigneePriority": n => { plannerTask.assigneePriority = n.getStringValue() as any ; },
        "assignments": n => { plannerTask.assignments = n.getObject(deserializeIntoPlannerAssignments) as any ; },
        "bucketId": n => { plannerTask.bucketId = n.getStringValue() as any ; },
        "bucketTaskBoardFormat": n => { plannerTask.bucketTaskBoardFormat = n.getObject(deserializeIntoPlannerBucketTaskBoardTaskFormat) as any ; },
        "checklistItemCount": n => { plannerTask.checklistItemCount = n.getNumberValue() as any ; },
        "completedBy": n => { plannerTask.completedBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "completedDateTime": n => { plannerTask.completedDateTime = n.getDateValue() as any ; },
        "conversationThreadId": n => { plannerTask.conversationThreadId = n.getStringValue() as any ; },
        "createdBy": n => { plannerTask.createdBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "createdDateTime": n => { plannerTask.createdDateTime = n.getDateValue() as any ; },
        "creationSource": n => { plannerTask.creationSource = n.getObject(deserializeIntoPlannerTaskCreation) as any ; },
        "details": n => { plannerTask.details = n.getObject(deserializeIntoPlannerTaskDetails) as any ; },
        "dueDateTime": n => { plannerTask.dueDateTime = n.getDateValue() as any ; },
        "hasDescription": n => { plannerTask.hasDescription = n.getBooleanValue() as any ; },
        "orderHint": n => { plannerTask.orderHint = n.getStringValue() as any ; },
        "percentComplete": n => { plannerTask.percentComplete = n.getNumberValue() as any ; },
        "planId": n => { plannerTask.planId = n.getStringValue() as any ; },
        "previewType": n => { plannerTask.previewType = n.getEnumValue<PlannerPreviewType>(PlannerPreviewType) as any ; },
        "priority": n => { plannerTask.priority = n.getNumberValue() as any ; },
        "progressTaskBoardFormat": n => { plannerTask.progressTaskBoardFormat = n.getObject(deserializeIntoPlannerProgressTaskBoardTaskFormat) as any ; },
        "referenceCount": n => { plannerTask.referenceCount = n.getNumberValue() as any ; },
        "startDateTime": n => { plannerTask.startDateTime = n.getDateValue() as any ; },
        "title": n => { plannerTask.title = n.getStringValue() as any ; },
    }
}

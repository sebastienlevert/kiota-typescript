import {PlannerTask} from './index';
import {PlannerPreviewType} from './plannerPreviewType';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializePlannerAppliedCategories} from './serializePlannerAppliedCategories';
import {serializePlannerAssignedToTaskBoardTaskFormat} from './serializePlannerAssignedToTaskBoardTaskFormat';
import {serializePlannerAssignments} from './serializePlannerAssignments';
import {serializePlannerBucketTaskBoardTaskFormat} from './serializePlannerBucketTaskBoardTaskFormat';
import {serializePlannerDelta} from './serializePlannerDelta';
import {serializePlannerProgressTaskBoardTaskFormat} from './serializePlannerProgressTaskBoardTaskFormat';
import {serializePlannerTaskCreation} from './serializePlannerTaskCreation';
import {serializePlannerTaskDetails} from './serializePlannerTaskDetails';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerTask(writer: SerializationWriter, plannerTask: PlannerTask | undefined = {}) : void {
        serializePlannerDelta(writer, plannerTask)
            writer.writeNumberValue("activeChecklistItemCount", plannerTask.activeChecklistItemCount);
            writer.writeObjectValueFromMethod("appliedCategories", plannerTask.appliedCategories as any, serializePlannerAppliedCategories);
            writer.writeObjectValueFromMethod("assignedToTaskBoardFormat", plannerTask.assignedToTaskBoardFormat as any, serializePlannerAssignedToTaskBoardTaskFormat);
            writer.writeStringValue("assigneePriority", plannerTask.assigneePriority);
            writer.writeObjectValueFromMethod("assignments", plannerTask.assignments as any, serializePlannerAssignments);
            writer.writeStringValue("bucketId", plannerTask.bucketId);
            writer.writeObjectValueFromMethod("bucketTaskBoardFormat", plannerTask.bucketTaskBoardFormat as any, serializePlannerBucketTaskBoardTaskFormat);
            writer.writeNumberValue("checklistItemCount", plannerTask.checklistItemCount);
            writer.writeObjectValueFromMethod("completedBy", plannerTask.completedBy as any, serializeIdentitySet);
            writer.writeDateValue("completedDateTime", plannerTask.completedDateTime);
            writer.writeStringValue("conversationThreadId", plannerTask.conversationThreadId);
            writer.writeObjectValueFromMethod("createdBy", plannerTask.createdBy as any, serializeIdentitySet);
            writer.writeDateValue("createdDateTime", plannerTask.createdDateTime);
            writer.writeObjectValueFromMethod("creationSource", plannerTask.creationSource as any, serializePlannerTaskCreation);
            writer.writeObjectValueFromMethod("details", plannerTask.details as any, serializePlannerTaskDetails);
            writer.writeDateValue("dueDateTime", plannerTask.dueDateTime);
            writer.writeBooleanValue("hasDescription", plannerTask.hasDescription);
            writer.writeStringValue("orderHint", plannerTask.orderHint);
            writer.writeNumberValue("percentComplete", plannerTask.percentComplete);
            writer.writeStringValue("planId", plannerTask.planId);
            writer.writeEnumValue<PlannerPreviewType>("previewType", plannerTask.previewType);
            writer.writeNumberValue("priority", plannerTask.priority);
            writer.writeObjectValueFromMethod("progressTaskBoardFormat", plannerTask.progressTaskBoardFormat as any, serializePlannerProgressTaskBoardTaskFormat);
            writer.writeNumberValue("referenceCount", plannerTask.referenceCount);
            writer.writeDateValue("startDateTime", plannerTask.startDateTime);
            writer.writeStringValue("title", plannerTask.title);
}

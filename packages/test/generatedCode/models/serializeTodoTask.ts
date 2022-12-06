import {Importance} from './importance';
import {TodoTask} from './index';
import {serializeAttachmentBase} from './serializeAttachmentBase';
import {serializeAttachmentSession} from './serializeAttachmentSession';
import {serializeChecklistItem} from './serializeChecklistItem';
import {serializeDateTimeTimeZone} from './serializeDateTimeTimeZone';
import {serializeEntity} from './serializeEntity';
import {serializeExtension} from './serializeExtension';
import {serializeItemBody} from './serializeItemBody';
import {serializeLinkedResource} from './serializeLinkedResource';
import {serializePatternedRecurrence} from './serializePatternedRecurrence';
import {TaskStatus} from './taskStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTodoTask(writer: SerializationWriter, todoTask: TodoTask | undefined = {}) : void {
        serializeEntity(writer, todoTask)
            writer.writeCollectionOfObjectValuesFromMethod("attachments", todoTask.attachments as any, serializeAttachmentBase);
            writer.writeCollectionOfObjectValuesFromMethod("attachmentSessions", todoTask.attachmentSessions as any, serializeAttachmentSession);
            writer.writeObjectValueFromMethod("body", todoTask.body as any, serializeItemBody);
            writer.writeDateValue("bodyLastModifiedDateTime", todoTask.bodyLastModifiedDateTime);
            writer.writeCollectionOfPrimitiveValues<string>("categories", todoTask.categories);
            writer.writeCollectionOfObjectValuesFromMethod("checklistItems", todoTask.checklistItems as any, serializeChecklistItem);
            writer.writeObjectValueFromMethod("completedDateTime", todoTask.completedDateTime as any, serializeDateTimeTimeZone);
            writer.writeDateValue("createdDateTime", todoTask.createdDateTime);
            writer.writeObjectValueFromMethod("dueDateTime", todoTask.dueDateTime as any, serializeDateTimeTimeZone);
            writer.writeCollectionOfObjectValuesFromMethod("extensions", todoTask.extensions as any, serializeExtension);
            writer.writeBooleanValue("hasAttachments", todoTask.hasAttachments);
            writer.writeEnumValue<Importance>("importance", todoTask.importance);
            writer.writeBooleanValue("isReminderOn", todoTask.isReminderOn);
            writer.writeDateValue("lastModifiedDateTime", todoTask.lastModifiedDateTime);
            writer.writeCollectionOfObjectValuesFromMethod("linkedResources", todoTask.linkedResources as any, serializeLinkedResource);
            writer.writeObjectValueFromMethod("recurrence", todoTask.recurrence as any, serializePatternedRecurrence);
            writer.writeObjectValueFromMethod("reminderDateTime", todoTask.reminderDateTime as any, serializeDateTimeTimeZone);
            writer.writeObjectValueFromMethod("startDateTime", todoTask.startDateTime as any, serializeDateTimeTimeZone);
            writer.writeEnumValue<TaskStatus>("status", todoTask.status);
            writer.writeStringValue("title", todoTask.title);
}

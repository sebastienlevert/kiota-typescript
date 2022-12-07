import {deserializeIntoAttachmentBase} from './deserializeIntoAttachmentBase';
import {deserializeIntoAttachmentSession} from './deserializeIntoAttachmentSession';
import {deserializeIntoChecklistItem} from './deserializeIntoChecklistItem';
import {deserializeIntoDateTimeTimeZone} from './deserializeIntoDateTimeTimeZone';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoExtension} from './deserializeIntoExtension';
import {deserializeIntoItemBody} from './deserializeIntoItemBody';
import {deserializeIntoLinkedResource} from './deserializeIntoLinkedResource';
import {deserializeIntoPatternedRecurrence} from './deserializeIntoPatternedRecurrence';
import {Importance} from './importance';
import {TodoTask} from './index';
import {TaskStatus} from './taskStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTodoTask(todoTask: TodoTask | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(todoTask),
        "attachments": n => { todoTask.attachments = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAttachmentBase) as any ; },
        "attachmentSessions": n => { todoTask.attachmentSessions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAttachmentSession) as any ; },
        "body": n => { todoTask.body = n.getObject(deserializeIntoItemBody) as any ; },
        "bodyLastModifiedDateTime": n => { todoTask.bodyLastModifiedDateTime = n.getDateValue() as any ; },
        "categories": n => { todoTask.categories = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "checklistItems": n => { todoTask.checklistItems = n.getCollectionOfObjectValuesFromMethod(deserializeIntoChecklistItem) as any ; },
        "completedDateTime": n => { todoTask.completedDateTime = n.getObject(deserializeIntoDateTimeTimeZone) as any ; },
        "createdDateTime": n => { todoTask.createdDateTime = n.getDateValue() as any ; },
        "dueDateTime": n => { todoTask.dueDateTime = n.getObject(deserializeIntoDateTimeTimeZone) as any ; },
        "extensions": n => { todoTask.extensions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoExtension) as any ; },
        "hasAttachments": n => { todoTask.hasAttachments = n.getBooleanValue() as any ; },
        "importance": n => { todoTask.importance = n.getEnumValue<Importance>(Importance) as any ; },
        "isReminderOn": n => { todoTask.isReminderOn = n.getBooleanValue() as any ; },
        "lastModifiedDateTime": n => { todoTask.lastModifiedDateTime = n.getDateValue() as any ; },
        "linkedResources": n => { todoTask.linkedResources = n.getCollectionOfObjectValuesFromMethod(deserializeIntoLinkedResource) as any ; },
        "recurrence": n => { todoTask.recurrence = n.getObject(deserializeIntoPatternedRecurrence) as any ; },
        "reminderDateTime": n => { todoTask.reminderDateTime = n.getObject(deserializeIntoDateTimeTimeZone) as any ; },
        "startDateTime": n => { todoTask.startDateTime = n.getObject(deserializeIntoDateTimeTimeZone) as any ; },
        "status": n => { todoTask.status = n.getEnumValue<TaskStatus>(TaskStatus) as any ; },
        "title": n => { todoTask.title = n.getStringValue() as any ; },
    }
}

import {Importance} from './importance';
import {OutlookTask} from './index';
import {Sensitivity} from './sensitivity';
import {serializeAttachment} from './serializeAttachment';
import {serializeDateTimeTimeZone} from './serializeDateTimeTimeZone';
import {serializeItemBody} from './serializeItemBody';
import {serializeMultiValueLegacyExtendedProperty} from './serializeMultiValueLegacyExtendedProperty';
import {serializeOutlookItem} from './serializeOutlookItem';
import {serializePatternedRecurrence} from './serializePatternedRecurrence';
import {serializeSingleValueLegacyExtendedProperty} from './serializeSingleValueLegacyExtendedProperty';
import {TaskStatus} from './taskStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOutlookTask(writer: SerializationWriter, outlookTask: OutlookTask | undefined = {}) : void {
        serializeOutlookItem(writer, outlookTask)
            writer.writeStringValue("assignedTo", outlookTask.assignedTo);
            writer.writeCollectionOfObjectValuesFromMethod("attachments", outlookTask.attachments as any, serializeAttachment);
            writer.writeObjectValueFromMethod("body", outlookTask.body as any, serializeItemBody);
            writer.writeObjectValueFromMethod("completedDateTime", outlookTask.completedDateTime as any, serializeDateTimeTimeZone);
            writer.writeObjectValueFromMethod("dueDateTime", outlookTask.dueDateTime as any, serializeDateTimeTimeZone);
            writer.writeBooleanValue("hasAttachments", outlookTask.hasAttachments);
            writer.writeEnumValue<Importance>("importance", outlookTask.importance);
            writer.writeBooleanValue("isReminderOn", outlookTask.isReminderOn);
            writer.writeCollectionOfObjectValuesFromMethod("multiValueExtendedProperties", outlookTask.multiValueExtendedProperties as any, serializeMultiValueLegacyExtendedProperty);
            writer.writeStringValue("owner", outlookTask.owner);
            writer.writeStringValue("parentFolderId", outlookTask.parentFolderId);
            writer.writeObjectValueFromMethod("recurrence", outlookTask.recurrence as any, serializePatternedRecurrence);
            writer.writeObjectValueFromMethod("reminderDateTime", outlookTask.reminderDateTime as any, serializeDateTimeTimeZone);
            writer.writeEnumValue<Sensitivity>("sensitivity", outlookTask.sensitivity);
            writer.writeCollectionOfObjectValuesFromMethod("singleValueExtendedProperties", outlookTask.singleValueExtendedProperties as any, serializeSingleValueLegacyExtendedProperty);
            writer.writeObjectValueFromMethod("startDateTime", outlookTask.startDateTime as any, serializeDateTimeTimeZone);
            writer.writeEnumValue<TaskStatus>("status", outlookTask.status);
            writer.writeStringValue("subject", outlookTask.subject);
}

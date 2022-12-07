import {deserializeIntoAttachment} from './deserializeIntoAttachment';
import {deserializeIntoDateTimeTimeZone} from './deserializeIntoDateTimeTimeZone';
import {deserializeIntoItemBody} from './deserializeIntoItemBody';
import {deserializeIntoMultiValueLegacyExtendedProperty} from './deserializeIntoMultiValueLegacyExtendedProperty';
import {deserializeIntoOutlookItem} from './deserializeIntoOutlookItem';
import {deserializeIntoPatternedRecurrence} from './deserializeIntoPatternedRecurrence';
import {deserializeIntoSingleValueLegacyExtendedProperty} from './deserializeIntoSingleValueLegacyExtendedProperty';
import {Importance} from './importance';
import {OutlookTask} from './index';
import {Sensitivity} from './sensitivity';
import {TaskStatus} from './taskStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOutlookTask(outlookTask: OutlookTask | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOutlookItem(outlookTask),
        "assignedTo": n => { outlookTask.assignedTo = n.getStringValue() as any ; },
        "attachments": n => { outlookTask.attachments = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAttachment) as any ; },
        "body": n => { outlookTask.body = n.getObject(deserializeIntoItemBody) as any ; },
        "completedDateTime": n => { outlookTask.completedDateTime = n.getObject(deserializeIntoDateTimeTimeZone) as any ; },
        "dueDateTime": n => { outlookTask.dueDateTime = n.getObject(deserializeIntoDateTimeTimeZone) as any ; },
        "hasAttachments": n => { outlookTask.hasAttachments = n.getBooleanValue() as any ; },
        "importance": n => { outlookTask.importance = n.getEnumValue<Importance>(Importance) as any ; },
        "isReminderOn": n => { outlookTask.isReminderOn = n.getBooleanValue() as any ; },
        "multiValueExtendedProperties": n => { outlookTask.multiValueExtendedProperties = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMultiValueLegacyExtendedProperty) as any ; },
        "owner": n => { outlookTask.owner = n.getStringValue() as any ; },
        "parentFolderId": n => { outlookTask.parentFolderId = n.getStringValue() as any ; },
        "recurrence": n => { outlookTask.recurrence = n.getObject(deserializeIntoPatternedRecurrence) as any ; },
        "reminderDateTime": n => { outlookTask.reminderDateTime = n.getObject(deserializeIntoDateTimeTimeZone) as any ; },
        "sensitivity": n => { outlookTask.sensitivity = n.getEnumValue<Sensitivity>(Sensitivity) as any ; },
        "singleValueExtendedProperties": n => { outlookTask.singleValueExtendedProperties = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSingleValueLegacyExtendedProperty) as any ; },
        "startDateTime": n => { outlookTask.startDateTime = n.getObject(deserializeIntoDateTimeTimeZone) as any ; },
        "status": n => { outlookTask.status = n.getEnumValue<TaskStatus>(TaskStatus) as any ; },
        "subject": n => { outlookTask.subject = n.getStringValue() as any ; },
    }
}

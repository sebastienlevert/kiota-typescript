import {Importance} from './importance';
import {AttachmentBase, AttachmentSession, ChecklistItem, DateTimeTimeZone, Entity, Extension, ItemBody, LinkedResource, PatternedRecurrence} from './index';
import {TaskStatus} from './taskStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TodoTask extends Entity, Partial<Parsable> {
    /** The attachments property */
    attachments?: AttachmentBase[];
    /** The attachmentSessions property */
    attachmentSessions?: AttachmentSession[];
    /** The task body that typically contains information about the task. */
    body?: ItemBody;
    /** The date and time when the task body was last modified. By default, it is in UTC. You can provide a custom time zone in the request header. The property value uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2020 would look like this: '2020-01-01T00:00:00Z'. */
    bodyLastModifiedDateTime?: Date;
    /** The categories associated with the task. Each category corresponds to the displayName property of an outlookCategory that the user has defined. */
    categories?: string[];
    /** A collection of checklistItems linked to a task. */
    checklistItems?: ChecklistItem[];
    /** The date and time in the specified time zone that the task was finished. */
    completedDateTime?: DateTimeTimeZone;
    /** The date and time when the task was created. By default, it is in UTC. You can provide a custom time zone in the request header. The property value uses ISO 8601 format. For example, midnight UTC on Jan 1, 2020 would look like this: '2020-01-01T00:00:00Z'. */
    createdDateTime?: Date;
    /** The date and time in the specified time zone that the task is to be finished. */
    dueDateTime?: DateTimeTimeZone;
    /** The collection of open extensions defined for the task. Nullable. */
    extensions?: Extension[];
    /** The hasAttachments property */
    hasAttachments?: boolean;
    /** The importance property */
    importance?: Importance;
    /** Set to true if an alert is set to remind the user of the task. */
    isReminderOn?: boolean;
    /** The date and time when the task was last modified. By default, it is in UTC. You can provide a custom time zone in the request header. The property value uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2020 would look like this: '2020-01-01T00:00:00Z'. */
    lastModifiedDateTime?: Date;
    /** A collection of resources linked to the task. */
    linkedResources?: LinkedResource[];
    /** The recurrence pattern for the task. */
    recurrence?: PatternedRecurrence;
    /** The date and time in the specified time zone for a reminder alert of the task to occur. */
    reminderDateTime?: DateTimeTimeZone;
    /** The startDateTime property */
    startDateTime?: DateTimeTimeZone;
    /** The status property */
    status?: TaskStatus;
    /** A brief description of the task. */
    title?: string;
}

import {Importance} from './importance';
import {Attachment, DateTimeTimeZone, ItemBody, MultiValueLegacyExtendedProperty, OutlookItem, PatternedRecurrence, SingleValueLegacyExtendedProperty} from './index';
import {Sensitivity} from './sensitivity';
import {TaskStatus} from './taskStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OutlookTask extends OutlookItem, Partial<Parsable> {
    /** The name of the person who has been assigned the task in Outlook. Read-only. */
    assignedTo?: string;
    /** The collection of fileAttachment, itemAttachment, and referenceAttachment attachments for the task.  Read-only. Nullable. */
    attachments?: Attachment[];
    /** The body property */
    body?: ItemBody;
    /** The completedDateTime property */
    completedDateTime?: DateTimeTimeZone;
    /** The dueDateTime property */
    dueDateTime?: DateTimeTimeZone;
    /** Set to true if the task has attachments. */
    hasAttachments?: boolean;
    /** The importance property */
    importance?: Importance;
    /** The isReminderOn property */
    isReminderOn?: boolean;
    /** The collection of multi-value extended properties defined for the task. Read-only. Nullable. */
    multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[];
    /** The owner property */
    owner?: string;
    /** The parentFolderId property */
    parentFolderId?: string;
    /** The recurrence property */
    recurrence?: PatternedRecurrence;
    /** The reminderDateTime property */
    reminderDateTime?: DateTimeTimeZone;
    /** The sensitivity property */
    sensitivity?: Sensitivity;
    /** The collection of single-value extended properties defined for the task. Read-only. Nullable. */
    singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[];
    /** The startDateTime property */
    startDateTime?: DateTimeTimeZone;
    /** The status property */
    status?: TaskStatus;
    /** The subject property */
    subject?: string;
}

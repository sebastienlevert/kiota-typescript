import {Importance} from './importance';
import {Attachment, Extension, ItemBody, Mention, MultiValueLegacyExtendedProperty, OutlookItem, Recipient, SingleValueLegacyExtendedProperty} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Post extends OutlookItem, Partial<Parsable> {
    /** The collection of fileAttachment, itemAttachment, and referenceAttachment attachments for the post. Read-only. Nullable. Supports $expand. */
    attachments?: Attachment[];
    /** The body property */
    body?: ItemBody;
    /** Unique ID of the conversation. Read-only. */
    conversationId?: string;
    /** Unique ID of the conversation thread. Read-only. */
    conversationThreadId?: string;
    /** The collection of open extensions defined for the post. Read-only. Nullable. Supports $expand. */
    extensions?: Extension[];
    /** The from property */
    from?: Recipient;
    /** Indicates whether the post has at least one attachment. This is a default property. */
    hasAttachments?: boolean;
    /** The importance property */
    importance?: Importance;
    /** The inReplyTo property */
    inReplyTo?: Post;
    /** The mentions property */
    mentions?: Mention[];
    /** The collection of multi-value extended properties defined for the post. Read-only. Nullable. */
    multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[];
    /** Conversation participants that were added to the thread as part of this post. */
    newParticipants?: Recipient[];
    /** Specifies when the post was received. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    receivedDateTime?: Date;
    /** The sender property */
    sender?: Recipient;
    /** The collection of single-value extended properties defined for the post. Read-only. Nullable. */
    singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[];
}

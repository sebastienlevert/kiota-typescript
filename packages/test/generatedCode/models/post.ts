import {Attachment, Extension, ItemBody, MultiValueLegacyExtendedProperty, OutlookItem, Recipient, SingleValueLegacyExtendedProperty} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Post extends OutlookItem, Partial<Parsable> {
    /** Read-only. Nullable. Supports $expand. */
    attachments?: Attachment[];
    /** The contents of the post. This is a default property. This property can be null. */
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
    /** Read-only. Supports $expand. */
    inReplyTo?: Post;
    /** The collection of multi-value extended properties defined for the post. Read-only. Nullable. */
    multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[];
    /** Conversation participants that were added to the thread as part of this post. */
    newParticipants?: Recipient[];
    /** Specifies when the post was received. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    receivedDateTime?: Date;
    /** Contains the address of the sender. The value of Sender is assumed to be the address of the authenticated user in the case when Sender is not specified. This is a default property. */
    sender?: Recipient;
    /** The collection of single-value extended properties defined for the post. Read-only. Nullable. */
    singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[];
}

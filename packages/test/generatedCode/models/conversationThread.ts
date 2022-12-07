import {Entity, Post, Recipient} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ConversationThread extends Entity, Partial<Parsable> {
    /** The Cc: recipients for the thread. Returned only on $select. */
    ccRecipients?: Recipient[];
    /** Indicates whether any of the posts within this thread has at least one attachment. Returned by default. */
    hasAttachments?: boolean;
    /** Indicates if the thread is locked. Returned by default. */
    isLocked?: boolean;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. */
    lastDeliveredDateTime?: Date;
    /** The posts property */
    posts?: Post[];
    /** A short summary from the body of the latest post in this conversation. Returned by default. */
    preview?: string;
    /** The topic of the conversation. This property can be set when the conversation is created, but it cannot be updated. Returned by default. */
    topic?: string;
    /** The To: recipients for the thread. Returned only on $select. */
    toRecipients?: Recipient[];
    /** All the users that sent a message to this thread. Returned by default. */
    uniqueSenders?: string[];
}

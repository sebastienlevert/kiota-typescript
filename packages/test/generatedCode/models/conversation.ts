import {ConversationThread, Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Conversation extends Entity, Partial<Parsable> {
    /** Indicates whether any of the posts within this Conversation has at least one attachment. Supports $filter (eq, ne) and $search. */
    hasAttachments?: boolean;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $filter (eq, ne, le, ge). */
    lastDeliveredDateTime?: Date;
    /** A short summary from the body of the latest post in this conversation. */
    preview?: string;
    /** A collection of all the conversation threads in the conversation. A navigation property. Read-only. Nullable. */
    threads?: ConversationThread[];
    /** The topic of the conversation. This property can be set when the conversation is created, but it cannot be updated. */
    topic?: string;
    /** All the users that sent a message to this Conversation. */
    uniqueSenders?: string[];
}

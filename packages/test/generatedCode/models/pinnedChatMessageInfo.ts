import {ChatMessage, Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PinnedChatMessageInfo extends Entity, Partial<Parsable> {
    /** Represents details about the chat message that is pinned. */
    message?: ChatMessage;
}

import {ChatMessage, Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PinnedChatMessageInfo extends Entity, Partial<Parsable> {
    /** The message property */
    message?: ChatMessage;
}

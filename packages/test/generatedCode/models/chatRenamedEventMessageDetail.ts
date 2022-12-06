import {EventMessageDetail, IdentitySet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ChatRenamedEventMessageDetail extends EventMessageDetail, Partial<Parsable> {
    /** The updated name of the chat. */
    chatDisplayName?: string;
    /** Unique identifier of the chat. */
    chatId?: string;
    /** Initiator of the event. */
    initiator?: IdentitySet;
}

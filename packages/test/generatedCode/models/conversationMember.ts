import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ConversationMember extends Entity, Partial<Parsable> {
    /** The display name of the user. */
    displayName?: string;
    /** The roles for that user. This property only contains additional qualifiers when relevant - for example, if the member has owner privileges, the roles property contains owner as one of the values. Similarly, if the member is a guest, the roles property contains guest as one of the values. A basic member should not have any values specified in the roles property. */
    roles?: string[];
    /** The timestamp denoting how far back a conversation's history is shared with the conversation member. This property is settable only for members of a chat. */
    visibleHistoryStartDateTime?: Date;
}

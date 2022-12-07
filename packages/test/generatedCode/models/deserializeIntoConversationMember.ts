import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ConversationMember} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConversationMember(conversationMember: ConversationMember | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(conversationMember),
        "displayName": n => { conversationMember.displayName = n.getStringValue() as any ; },
        "roles": n => { conversationMember.roles = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "visibleHistoryStartDateTime": n => { conversationMember.visibleHistoryStartDateTime = n.getDateValue() as any ; },
    }
}

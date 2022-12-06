import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {deserializeIntoTeamworkUserIdentity} from './deserializeIntoTeamworkUserIdentity';
import {ConversationMemberRoleUpdatedEventMessageDetail} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConversationMemberRoleUpdatedEventMessageDetail(conversationMemberRoleUpdatedEventMessageDetail: ConversationMemberRoleUpdatedEventMessageDetail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(conversationMemberRoleUpdatedEventMessageDetail),
        "conversationMemberRoles": n => { conversationMemberRoleUpdatedEventMessageDetail.conversationMemberRoles = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "conversationMemberUser": n => { conversationMemberRoleUpdatedEventMessageDetail.conversationMemberUser = n.getObject(deserializeIntoTeamworkUserIdentity) as any ; },
        "initiator": n => { conversationMemberRoleUpdatedEventMessageDetail.initiator = n.getObject(deserializeIntoIdentitySet) as any ; },
    }
}

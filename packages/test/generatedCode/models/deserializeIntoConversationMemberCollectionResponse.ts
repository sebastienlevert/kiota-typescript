import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoConversationMember} from './deserializeIntoConversationMember';
import {ConversationMemberCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConversationMemberCollectionResponse(conversationMemberCollectionResponse: ConversationMemberCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(conversationMemberCollectionResponse),
        "value": n => { conversationMemberCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoConversationMember) as any ; },
    }
}

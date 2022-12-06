import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoConversation} from './deserializeIntoConversation';
import {ConversationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConversationCollectionResponse(conversationCollectionResponse: ConversationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(conversationCollectionResponse),
        "value": n => { conversationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoConversation) as any ; },
    }
}

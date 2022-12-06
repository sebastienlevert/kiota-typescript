import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoConversationThread} from './deserializeIntoConversationThread';
import {ConversationThreadCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConversationThreadCollectionResponse(conversationThreadCollectionResponse: ConversationThreadCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(conversationThreadCollectionResponse),
        "value": n => { conversationThreadCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoConversationThread) as any ; },
    }
}

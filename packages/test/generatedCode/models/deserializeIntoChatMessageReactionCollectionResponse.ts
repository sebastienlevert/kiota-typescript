import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoChatMessageReaction} from './deserializeIntoChatMessageReaction';
import {ChatMessageReactionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChatMessageReactionCollectionResponse(chatMessageReactionCollectionResponse: ChatMessageReactionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(chatMessageReactionCollectionResponse),
        "value": n => { chatMessageReactionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoChatMessageReaction) as any ; },
    }
}

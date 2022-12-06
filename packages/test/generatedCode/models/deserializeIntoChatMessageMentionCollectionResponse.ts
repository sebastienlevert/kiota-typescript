import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoChatMessageMention} from './deserializeIntoChatMessageMention';
import {ChatMessageMentionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChatMessageMentionCollectionResponse(chatMessageMentionCollectionResponse: ChatMessageMentionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(chatMessageMentionCollectionResponse),
        "value": n => { chatMessageMentionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoChatMessageMention) as any ; },
    }
}

import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoChatMessageHostedContent} from './deserializeIntoChatMessageHostedContent';
import {ChatMessageHostedContentCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChatMessageHostedContentCollectionResponse(chatMessageHostedContentCollectionResponse: ChatMessageHostedContentCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(chatMessageHostedContentCollectionResponse),
        "value": n => { chatMessageHostedContentCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoChatMessageHostedContent) as any ; },
    }
}

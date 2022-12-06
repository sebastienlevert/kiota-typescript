import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoChatMessage} from './deserializeIntoChatMessage';
import {ChatMessageCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChatMessageCollectionResponse(chatMessageCollectionResponse: ChatMessageCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(chatMessageCollectionResponse),
        "value": n => { chatMessageCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoChatMessage) as any ; },
    }
}

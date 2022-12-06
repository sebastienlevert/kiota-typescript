import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoPinnedChatMessageInfo} from './deserializeIntoPinnedChatMessageInfo';
import {PinnedChatMessageInfoCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPinnedChatMessageInfoCollectionResponse(pinnedChatMessageInfoCollectionResponse: PinnedChatMessageInfoCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(pinnedChatMessageInfoCollectionResponse),
        "value": n => { pinnedChatMessageInfoCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPinnedChatMessageInfo) as any ; },
    }
}

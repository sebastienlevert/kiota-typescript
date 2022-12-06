import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoChat} from './deserializeIntoChat';
import {ChatCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChatCollectionResponse(chatCollectionResponse: ChatCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(chatCollectionResponse),
        "value": n => { chatCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoChat) as any ; },
    }
}

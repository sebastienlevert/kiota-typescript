import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoMessage} from './deserializeIntoMessage';
import {MessageCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMessageCollectionResponse(messageCollectionResponse: MessageCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(messageCollectionResponse),
        "value": n => { messageCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMessage) as any ; },
    }
}

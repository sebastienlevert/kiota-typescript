import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoEventMessage} from './deserializeIntoEventMessage';
import {EventMessageCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEventMessageCollectionResponse(eventMessageCollectionResponse: EventMessageCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(eventMessageCollectionResponse),
        "value": n => { eventMessageCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEventMessage) as any ; },
    }
}

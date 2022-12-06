import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoEventMessageRequest} from './deserializeIntoEventMessageRequest';
import {EventMessageRequestCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEventMessageRequestCollectionResponse(eventMessageRequestCollectionResponse: EventMessageRequestCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(eventMessageRequestCollectionResponse),
        "value": n => { eventMessageRequestCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEventMessageRequest) as any ; },
    }
}

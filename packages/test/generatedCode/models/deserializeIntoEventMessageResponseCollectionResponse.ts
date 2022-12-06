import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoEventMessageResponse} from './deserializeIntoEventMessageResponse';
import {EventMessageResponseCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEventMessageResponseCollectionResponse(eventMessageResponseCollectionResponse: EventMessageResponseCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(eventMessageResponseCollectionResponse),
        "value": n => { eventMessageResponseCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEventMessageResponse) as any ; },
    }
}

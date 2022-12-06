import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoEvent} from './deserializeIntoEvent';
import {EventCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEventCollectionResponse(eventCollectionResponse: EventCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(eventCollectionResponse),
        "value": n => { eventCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEvent) as any ; },
    }
}

import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoLinkedResource} from './deserializeIntoLinkedResource';
import {LinkedResourceCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLinkedResourceCollectionResponse(linkedResourceCollectionResponse: LinkedResourceCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(linkedResourceCollectionResponse),
        "value": n => { linkedResourceCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoLinkedResource) as any ; },
    }
}

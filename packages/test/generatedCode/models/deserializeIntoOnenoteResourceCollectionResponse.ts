import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoOnenoteResource} from './deserializeIntoOnenoteResource';
import {OnenoteResourceCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnenoteResourceCollectionResponse(onenoteResourceCollectionResponse: OnenoteResourceCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(onenoteResourceCollectionResponse),
        "value": n => { onenoteResourceCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOnenoteResource) as any ; },
    }
}

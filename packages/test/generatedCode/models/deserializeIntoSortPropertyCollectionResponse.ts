import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSortProperty} from './deserializeIntoSortProperty';
import {SortPropertyCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSortPropertyCollectionResponse(sortPropertyCollectionResponse: SortPropertyCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(sortPropertyCollectionResponse),
        "value": n => { sortPropertyCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSortProperty) as any ; },
    }
}

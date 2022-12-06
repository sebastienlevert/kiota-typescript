import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoList} from './deserializeIntoList';
import {ListCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoListCollectionResponse(listCollectionResponse: ListCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(listCollectionResponse),
        "value": n => { listCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoList) as any ; },
    }
}

import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSearchHit} from './deserializeIntoSearchHit';
import {SearchHitCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSearchHitCollectionResponse(searchHitCollectionResponse: SearchHitCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(searchHitCollectionResponse),
        "value": n => { searchHitCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSearchHit) as any ; },
    }
}

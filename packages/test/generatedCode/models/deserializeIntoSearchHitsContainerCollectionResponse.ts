import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSearchHitsContainer} from './deserializeIntoSearchHitsContainer';
import {SearchHitsContainerCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSearchHitsContainerCollectionResponse(searchHitsContainerCollectionResponse: SearchHitsContainerCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(searchHitsContainerCollectionResponse),
        "value": n => { searchHitsContainerCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSearchHitsContainer) as any ; },
    }
}

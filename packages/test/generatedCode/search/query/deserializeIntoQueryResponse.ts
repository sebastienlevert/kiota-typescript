import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSearchResponse} from '../../models/deserializeIntoSearchResponse';
import {QueryResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoQueryResponse(queryResponse: QueryResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(queryResponse),
        "value": n => { queryResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSearchResponse) as any ; },
    }
}

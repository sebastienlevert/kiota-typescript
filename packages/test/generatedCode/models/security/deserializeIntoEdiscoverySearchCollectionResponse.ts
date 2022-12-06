import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoEdiscoverySearch} from './deserializeIntoEdiscoverySearch';
import {EdiscoverySearchCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoverySearchCollectionResponse(ediscoverySearchCollectionResponse: EdiscoverySearchCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(ediscoverySearchCollectionResponse),
        "value": n => { ediscoverySearchCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEdiscoverySearch) as any ; },
    }
}

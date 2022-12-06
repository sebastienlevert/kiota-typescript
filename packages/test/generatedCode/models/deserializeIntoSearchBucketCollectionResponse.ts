import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSearchBucket} from './deserializeIntoSearchBucket';
import {SearchBucketCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSearchBucketCollectionResponse(searchBucketCollectionResponse: SearchBucketCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(searchBucketCollectionResponse),
        "value": n => { searchBucketCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSearchBucket) as any ; },
    }
}

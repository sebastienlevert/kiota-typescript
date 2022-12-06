import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoEdiscoveryPurgeDataOperation} from './deserializeIntoEdiscoveryPurgeDataOperation';
import {EdiscoveryPurgeDataOperationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryPurgeDataOperationCollectionResponse(ediscoveryPurgeDataOperationCollectionResponse: EdiscoveryPurgeDataOperationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(ediscoveryPurgeDataOperationCollectionResponse),
        "value": n => { ediscoveryPurgeDataOperationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEdiscoveryPurgeDataOperation) as any ; },
    }
}

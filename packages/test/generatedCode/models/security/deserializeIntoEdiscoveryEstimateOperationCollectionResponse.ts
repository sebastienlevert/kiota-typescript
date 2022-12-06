import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoEdiscoveryEstimateOperation} from './deserializeIntoEdiscoveryEstimateOperation';
import {EdiscoveryEstimateOperationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryEstimateOperationCollectionResponse(ediscoveryEstimateOperationCollectionResponse: EdiscoveryEstimateOperationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(ediscoveryEstimateOperationCollectionResponse),
        "value": n => { ediscoveryEstimateOperationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEdiscoveryEstimateOperation) as any ; },
    }
}

import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {EdiscoveryAddToReviewSetOperationCollectionResponse} from './index';
import {serializeEdiscoveryAddToReviewSetOperation} from './serializeEdiscoveryAddToReviewSetOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryAddToReviewSetOperationCollectionResponse(writer: SerializationWriter, ediscoveryAddToReviewSetOperationCollectionResponse: EdiscoveryAddToReviewSetOperationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, ediscoveryAddToReviewSetOperationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", ediscoveryAddToReviewSetOperationCollectionResponse.value as any, serializeEdiscoveryAddToReviewSetOperation);
}

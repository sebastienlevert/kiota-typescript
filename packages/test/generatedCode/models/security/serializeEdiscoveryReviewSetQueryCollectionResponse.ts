import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {EdiscoveryReviewSetQueryCollectionResponse} from './index';
import {serializeEdiscoveryReviewSetQuery} from './serializeEdiscoveryReviewSetQuery';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryReviewSetQueryCollectionResponse(writer: SerializationWriter, ediscoveryReviewSetQueryCollectionResponse: EdiscoveryReviewSetQueryCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, ediscoveryReviewSetQueryCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", ediscoveryReviewSetQueryCollectionResponse.value as any, serializeEdiscoveryReviewSetQuery);
}

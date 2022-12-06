import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {EdiscoveryReviewSetCollectionResponse} from './index';
import {serializeEdiscoveryReviewSet} from './serializeEdiscoveryReviewSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryReviewSetCollectionResponse(writer: SerializationWriter, ediscoveryReviewSetCollectionResponse: EdiscoveryReviewSetCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, ediscoveryReviewSetCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", ediscoveryReviewSetCollectionResponse.value as any, serializeEdiscoveryReviewSet);
}

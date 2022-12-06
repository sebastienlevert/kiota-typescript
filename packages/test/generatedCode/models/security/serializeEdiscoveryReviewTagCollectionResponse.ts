import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {EdiscoveryReviewTagCollectionResponse} from './index';
import {serializeEdiscoveryReviewTag} from './serializeEdiscoveryReviewTag';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryReviewTagCollectionResponse(writer: SerializationWriter, ediscoveryReviewTagCollectionResponse: EdiscoveryReviewTagCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, ediscoveryReviewTagCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", ediscoveryReviewTagCollectionResponse.value as any, serializeEdiscoveryReviewTag);
}

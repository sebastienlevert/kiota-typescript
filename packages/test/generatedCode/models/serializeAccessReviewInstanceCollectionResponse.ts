import {AccessReviewInstanceCollectionResponse} from './index';
import {serializeAccessReviewInstance} from './serializeAccessReviewInstance';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewInstanceCollectionResponse(writer: SerializationWriter, accessReviewInstanceCollectionResponse: AccessReviewInstanceCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessReviewInstanceCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", accessReviewInstanceCollectionResponse.value as any, serializeAccessReviewInstance);
}

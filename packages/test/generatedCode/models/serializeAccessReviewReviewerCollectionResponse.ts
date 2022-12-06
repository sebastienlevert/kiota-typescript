import {AccessReviewReviewerCollectionResponse} from './index';
import {serializeAccessReviewReviewer} from './serializeAccessReviewReviewer';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewReviewerCollectionResponse(writer: SerializationWriter, accessReviewReviewerCollectionResponse: AccessReviewReviewerCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessReviewReviewerCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", accessReviewReviewerCollectionResponse.value as any, serializeAccessReviewReviewer);
}

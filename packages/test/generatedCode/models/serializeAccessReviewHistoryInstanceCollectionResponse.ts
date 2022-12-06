import {AccessReviewHistoryInstanceCollectionResponse} from './index';
import {serializeAccessReviewHistoryInstance} from './serializeAccessReviewHistoryInstance';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewHistoryInstanceCollectionResponse(writer: SerializationWriter, accessReviewHistoryInstanceCollectionResponse: AccessReviewHistoryInstanceCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessReviewHistoryInstanceCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", accessReviewHistoryInstanceCollectionResponse.value as any, serializeAccessReviewHistoryInstance);
}

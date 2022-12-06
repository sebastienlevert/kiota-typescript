import {AccessReviewInstanceDecisionItemCollectionResponse} from './index';
import {serializeAccessReviewInstanceDecisionItem} from './serializeAccessReviewInstanceDecisionItem';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewInstanceDecisionItemCollectionResponse(writer: SerializationWriter, accessReviewInstanceDecisionItemCollectionResponse: AccessReviewInstanceDecisionItemCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessReviewInstanceDecisionItemCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", accessReviewInstanceDecisionItemCollectionResponse.value as any, serializeAccessReviewInstanceDecisionItem);
}

import {AccessReviewReviewerScopeCollectionResponse} from './index';
import {serializeAccessReviewReviewerScope} from './serializeAccessReviewReviewerScope';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewReviewerScopeCollectionResponse(writer: SerializationWriter, accessReviewReviewerScopeCollectionResponse: AccessReviewReviewerScopeCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessReviewReviewerScopeCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", accessReviewReviewerScopeCollectionResponse.value as any, serializeAccessReviewReviewerScope);
}

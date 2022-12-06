import {AccessReviewScopeCollectionResponse} from './index';
import {serializeAccessReviewScope} from './serializeAccessReviewScope';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewScopeCollectionResponse(writer: SerializationWriter, accessReviewScopeCollectionResponse: AccessReviewScopeCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessReviewScopeCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", accessReviewScopeCollectionResponse.value as any, serializeAccessReviewScope);
}

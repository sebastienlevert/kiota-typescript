import {AccessReviewApplyActionCollectionResponse} from './index';
import {serializeAccessReviewApplyAction} from './serializeAccessReviewApplyAction';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewApplyActionCollectionResponse(writer: SerializationWriter, accessReviewApplyActionCollectionResponse: AccessReviewApplyActionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessReviewApplyActionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", accessReviewApplyActionCollectionResponse.value as any, serializeAccessReviewApplyAction);
}

import {AccessReviewStageCollectionResponse} from './index';
import {serializeAccessReviewStage} from './serializeAccessReviewStage';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewStageCollectionResponse(writer: SerializationWriter, accessReviewStageCollectionResponse: AccessReviewStageCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessReviewStageCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", accessReviewStageCollectionResponse.value as any, serializeAccessReviewStage);
}

import {AccessReviewHistoryDefinitionCollectionResponse} from './index';
import {serializeAccessReviewHistoryDefinition} from './serializeAccessReviewHistoryDefinition';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewHistoryDefinitionCollectionResponse(writer: SerializationWriter, accessReviewHistoryDefinitionCollectionResponse: AccessReviewHistoryDefinitionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessReviewHistoryDefinitionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", accessReviewHistoryDefinitionCollectionResponse.value as any, serializeAccessReviewHistoryDefinition);
}

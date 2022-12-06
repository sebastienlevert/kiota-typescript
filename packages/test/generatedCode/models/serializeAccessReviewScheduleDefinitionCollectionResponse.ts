import {AccessReviewScheduleDefinitionCollectionResponse} from './index';
import {serializeAccessReviewScheduleDefinition} from './serializeAccessReviewScheduleDefinition';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewScheduleDefinitionCollectionResponse(writer: SerializationWriter, accessReviewScheduleDefinitionCollectionResponse: AccessReviewScheduleDefinitionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessReviewScheduleDefinitionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", accessReviewScheduleDefinitionCollectionResponse.value as any, serializeAccessReviewScheduleDefinition);
}

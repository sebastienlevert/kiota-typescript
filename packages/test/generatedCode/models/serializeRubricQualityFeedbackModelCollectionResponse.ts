import {RubricQualityFeedbackModelCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeRubricQualityFeedbackModel} from './serializeRubricQualityFeedbackModel';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRubricQualityFeedbackModelCollectionResponse(writer: SerializationWriter, rubricQualityFeedbackModelCollectionResponse: RubricQualityFeedbackModelCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, rubricQualityFeedbackModelCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", rubricQualityFeedbackModelCollectionResponse.value as any, serializeRubricQualityFeedbackModel);
}

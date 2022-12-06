import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoRubricQualityFeedbackModel} from './deserializeIntoRubricQualityFeedbackModel';
import {RubricQualityFeedbackModelCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRubricQualityFeedbackModelCollectionResponse(rubricQualityFeedbackModelCollectionResponse: RubricQualityFeedbackModelCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(rubricQualityFeedbackModelCollectionResponse),
        "value": n => { rubricQualityFeedbackModelCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRubricQualityFeedbackModel) as any ; },
    }
}

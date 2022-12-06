import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoRubricQualitySelectedColumnModel} from './deserializeIntoRubricQualitySelectedColumnModel';
import {RubricQualitySelectedColumnModelCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRubricQualitySelectedColumnModelCollectionResponse(rubricQualitySelectedColumnModelCollectionResponse: RubricQualitySelectedColumnModelCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(rubricQualitySelectedColumnModelCollectionResponse),
        "value": n => { rubricQualitySelectedColumnModelCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRubricQualitySelectedColumnModel) as any ; },
    }
}

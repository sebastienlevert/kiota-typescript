import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoRubricQuality} from './deserializeIntoRubricQuality';
import {RubricQualityCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRubricQualityCollectionResponse(rubricQualityCollectionResponse: RubricQualityCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(rubricQualityCollectionResponse),
        "value": n => { rubricQualityCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRubricQuality) as any ; },
    }
}

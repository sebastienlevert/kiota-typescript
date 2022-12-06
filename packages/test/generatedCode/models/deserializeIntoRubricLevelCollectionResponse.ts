import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoRubricLevel} from './deserializeIntoRubricLevel';
import {RubricLevelCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRubricLevelCollectionResponse(rubricLevelCollectionResponse: RubricLevelCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(rubricLevelCollectionResponse),
        "value": n => { rubricLevelCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRubricLevel) as any ; },
    }
}

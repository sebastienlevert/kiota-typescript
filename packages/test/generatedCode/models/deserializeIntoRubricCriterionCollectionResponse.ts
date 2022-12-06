import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoRubricCriterion} from './deserializeIntoRubricCriterion';
import {RubricCriterionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRubricCriterionCollectionResponse(rubricCriterionCollectionResponse: RubricCriterionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(rubricCriterionCollectionResponse),
        "value": n => { rubricCriterionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRubricCriterion) as any ; },
    }
}

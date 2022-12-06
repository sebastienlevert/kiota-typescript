import {RubricCriterionCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeRubricCriterion} from './serializeRubricCriterion';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRubricCriterionCollectionResponse(writer: SerializationWriter, rubricCriterionCollectionResponse: RubricCriterionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, rubricCriterionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", rubricCriterionCollectionResponse.value as any, serializeRubricCriterion);
}

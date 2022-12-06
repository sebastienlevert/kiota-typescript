import {EducationRubricOutcomeCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEducationRubricOutcome} from './serializeEducationRubricOutcome';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationRubricOutcomeCollectionResponse(writer: SerializationWriter, educationRubricOutcomeCollectionResponse: EducationRubricOutcomeCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, educationRubricOutcomeCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", educationRubricOutcomeCollectionResponse.value as any, serializeEducationRubricOutcome);
}

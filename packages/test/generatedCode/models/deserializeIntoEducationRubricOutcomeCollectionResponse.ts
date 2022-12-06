import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoEducationRubricOutcome} from './deserializeIntoEducationRubricOutcome';
import {EducationRubricOutcomeCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationRubricOutcomeCollectionResponse(educationRubricOutcomeCollectionResponse: EducationRubricOutcomeCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(educationRubricOutcomeCollectionResponse),
        "value": n => { educationRubricOutcomeCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEducationRubricOutcome) as any ; },
    }
}

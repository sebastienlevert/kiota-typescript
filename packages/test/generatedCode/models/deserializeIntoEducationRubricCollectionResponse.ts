import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoEducationRubric} from './deserializeIntoEducationRubric';
import {EducationRubricCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationRubricCollectionResponse(educationRubricCollectionResponse: EducationRubricCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(educationRubricCollectionResponse),
        "value": n => { educationRubricCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEducationRubric) as any ; },
    }
}

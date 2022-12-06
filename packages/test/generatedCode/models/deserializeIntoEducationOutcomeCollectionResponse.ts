import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoEducationOutcome} from './deserializeIntoEducationOutcome';
import {EducationOutcomeCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationOutcomeCollectionResponse(educationOutcomeCollectionResponse: EducationOutcomeCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(educationOutcomeCollectionResponse),
        "value": n => { educationOutcomeCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEducationOutcome) as any ; },
    }
}

import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoEducationPointsOutcome} from './deserializeIntoEducationPointsOutcome';
import {EducationPointsOutcomeCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationPointsOutcomeCollectionResponse(educationPointsOutcomeCollectionResponse: EducationPointsOutcomeCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(educationPointsOutcomeCollectionResponse),
        "value": n => { educationPointsOutcomeCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEducationPointsOutcome) as any ; },
    }
}

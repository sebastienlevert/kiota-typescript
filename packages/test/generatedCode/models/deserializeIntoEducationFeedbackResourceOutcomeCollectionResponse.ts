import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoEducationFeedbackResourceOutcome} from './deserializeIntoEducationFeedbackResourceOutcome';
import {EducationFeedbackResourceOutcomeCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationFeedbackResourceOutcomeCollectionResponse(educationFeedbackResourceOutcomeCollectionResponse: EducationFeedbackResourceOutcomeCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(educationFeedbackResourceOutcomeCollectionResponse),
        "value": n => { educationFeedbackResourceOutcomeCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEducationFeedbackResourceOutcome) as any ; },
    }
}

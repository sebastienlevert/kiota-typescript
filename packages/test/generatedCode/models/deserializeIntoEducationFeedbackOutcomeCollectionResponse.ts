import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoEducationFeedbackOutcome} from './deserializeIntoEducationFeedbackOutcome';
import {EducationFeedbackOutcomeCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationFeedbackOutcomeCollectionResponse(educationFeedbackOutcomeCollectionResponse: EducationFeedbackOutcomeCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(educationFeedbackOutcomeCollectionResponse),
        "value": n => { educationFeedbackOutcomeCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEducationFeedbackOutcome) as any ; },
    }
}

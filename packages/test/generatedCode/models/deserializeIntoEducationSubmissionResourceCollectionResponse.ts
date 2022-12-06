import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoEducationSubmissionResource} from './deserializeIntoEducationSubmissionResource';
import {EducationSubmissionResourceCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationSubmissionResourceCollectionResponse(educationSubmissionResourceCollectionResponse: EducationSubmissionResourceCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(educationSubmissionResourceCollectionResponse),
        "value": n => { educationSubmissionResourceCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEducationSubmissionResource) as any ; },
    }
}

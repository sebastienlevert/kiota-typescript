import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoEducationAssignmentResource} from './deserializeIntoEducationAssignmentResource';
import {EducationAssignmentResourceCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationAssignmentResourceCollectionResponse(educationAssignmentResourceCollectionResponse: EducationAssignmentResourceCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(educationAssignmentResourceCollectionResponse),
        "value": n => { educationAssignmentResourceCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEducationAssignmentResource) as any ; },
    }
}

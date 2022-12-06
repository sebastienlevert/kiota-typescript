import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoEducationAssignment} from './deserializeIntoEducationAssignment';
import {EducationAssignmentCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationAssignmentCollectionResponse(educationAssignmentCollectionResponse: EducationAssignmentCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(educationAssignmentCollectionResponse),
        "value": n => { educationAssignmentCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEducationAssignment) as any ; },
    }
}

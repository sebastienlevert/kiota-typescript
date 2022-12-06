import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoEducationSubmission} from './deserializeIntoEducationSubmission';
import {EducationSubmissionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationSubmissionCollectionResponse(educationSubmissionCollectionResponse: EducationSubmissionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(educationSubmissionCollectionResponse),
        "value": n => { educationSubmissionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEducationSubmission) as any ; },
    }
}

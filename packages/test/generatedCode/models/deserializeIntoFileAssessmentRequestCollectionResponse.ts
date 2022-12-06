import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoFileAssessmentRequest} from './deserializeIntoFileAssessmentRequest';
import {FileAssessmentRequestCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFileAssessmentRequestCollectionResponse(fileAssessmentRequestCollectionResponse: FileAssessmentRequestCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(fileAssessmentRequestCollectionResponse),
        "value": n => { fileAssessmentRequestCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoFileAssessmentRequest) as any ; },
    }
}

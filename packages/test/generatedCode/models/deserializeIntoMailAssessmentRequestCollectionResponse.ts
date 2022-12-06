import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoMailAssessmentRequest} from './deserializeIntoMailAssessmentRequest';
import {MailAssessmentRequestCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMailAssessmentRequestCollectionResponse(mailAssessmentRequestCollectionResponse: MailAssessmentRequestCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(mailAssessmentRequestCollectionResponse),
        "value": n => { mailAssessmentRequestCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMailAssessmentRequest) as any ; },
    }
}

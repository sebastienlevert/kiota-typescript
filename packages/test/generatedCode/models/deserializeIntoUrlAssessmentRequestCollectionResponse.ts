import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoUrlAssessmentRequest} from './deserializeIntoUrlAssessmentRequest';
import {UrlAssessmentRequestCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUrlAssessmentRequestCollectionResponse(urlAssessmentRequestCollectionResponse: UrlAssessmentRequestCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(urlAssessmentRequestCollectionResponse),
        "value": n => { urlAssessmentRequestCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUrlAssessmentRequest) as any ; },
    }
}

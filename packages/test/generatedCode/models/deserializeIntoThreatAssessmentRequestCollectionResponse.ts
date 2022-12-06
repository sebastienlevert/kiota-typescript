import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoThreatAssessmentRequest} from './deserializeIntoThreatAssessmentRequest';
import {ThreatAssessmentRequestCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoThreatAssessmentRequestCollectionResponse(threatAssessmentRequestCollectionResponse: ThreatAssessmentRequestCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(threatAssessmentRequestCollectionResponse),
        "value": n => { threatAssessmentRequestCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoThreatAssessmentRequest) as any ; },
    }
}

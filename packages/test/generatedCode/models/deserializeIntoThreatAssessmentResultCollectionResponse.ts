import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoThreatAssessmentResult} from './deserializeIntoThreatAssessmentResult';
import {ThreatAssessmentResultCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoThreatAssessmentResultCollectionResponse(threatAssessmentResultCollectionResponse: ThreatAssessmentResultCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(threatAssessmentResultCollectionResponse),
        "value": n => { threatAssessmentResultCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoThreatAssessmentResult) as any ; },
    }
}

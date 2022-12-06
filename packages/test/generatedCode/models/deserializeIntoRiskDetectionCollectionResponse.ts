import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoRiskDetection} from './deserializeIntoRiskDetection';
import {RiskDetectionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRiskDetectionCollectionResponse(riskDetectionCollectionResponse: RiskDetectionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(riskDetectionCollectionResponse),
        "value": n => { riskDetectionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRiskDetection) as any ; },
    }
}

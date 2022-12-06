import {RiskDetectionCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeRiskDetection} from './serializeRiskDetection';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRiskDetectionCollectionResponse(writer: SerializationWriter, riskDetectionCollectionResponse: RiskDetectionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, riskDetectionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", riskDetectionCollectionResponse.value as any, serializeRiskDetection);
}

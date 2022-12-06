import {ThreatAssessmentResultCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeThreatAssessmentResult} from './serializeThreatAssessmentResult';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeThreatAssessmentResultCollectionResponse(writer: SerializationWriter, threatAssessmentResultCollectionResponse: ThreatAssessmentResultCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, threatAssessmentResultCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", threatAssessmentResultCollectionResponse.value as any, serializeThreatAssessmentResult);
}

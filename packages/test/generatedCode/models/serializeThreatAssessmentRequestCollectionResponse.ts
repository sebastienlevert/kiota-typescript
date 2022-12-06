import {ThreatAssessmentRequestCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeThreatAssessmentRequest} from './serializeThreatAssessmentRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeThreatAssessmentRequestCollectionResponse(writer: SerializationWriter, threatAssessmentRequestCollectionResponse: ThreatAssessmentRequestCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, threatAssessmentRequestCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", threatAssessmentRequestCollectionResponse.value as any, serializeThreatAssessmentRequest);
}

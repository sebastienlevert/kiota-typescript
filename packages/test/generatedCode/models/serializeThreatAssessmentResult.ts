import {ThreatAssessmentResult} from './index';
import {serializeEntity} from './serializeEntity';
import {ThreatAssessmentResultType} from './threatAssessmentResultType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeThreatAssessmentResult(writer: SerializationWriter, threatAssessmentResult: ThreatAssessmentResult | undefined = {}) : void {
        serializeEntity(writer, threatAssessmentResult)
            writer.writeDateValue("createdDateTime", threatAssessmentResult.createdDateTime);
            writer.writeStringValue("message", threatAssessmentResult.message);
            writer.writeEnumValue<ThreatAssessmentResultType>("resultType", threatAssessmentResult.resultType);
}

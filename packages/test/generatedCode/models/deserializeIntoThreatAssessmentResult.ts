import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ThreatAssessmentResult} from './index';
import {ThreatAssessmentResultType} from './threatAssessmentResultType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoThreatAssessmentResult(threatAssessmentResult: ThreatAssessmentResult | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(threatAssessmentResult),
        "createdDateTime": n => { threatAssessmentResult.createdDateTime = n.getDateValue() as any ; },
        "message": n => { threatAssessmentResult.message = n.getStringValue() as any ; },
        "resultType": n => { threatAssessmentResult.resultType = n.getEnumValue<ThreatAssessmentResultType>(ThreatAssessmentResultType) as any ; },
    }
}

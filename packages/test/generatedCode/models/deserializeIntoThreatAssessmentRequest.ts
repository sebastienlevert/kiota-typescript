import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {deserializeIntoThreatAssessmentResult} from './deserializeIntoThreatAssessmentResult';
import {ThreatAssessmentRequest} from './index';
import {ThreatAssessmentContentType} from './threatAssessmentContentType';
import {ThreatAssessmentRequestSource} from './threatAssessmentRequestSource';
import {ThreatAssessmentStatus} from './threatAssessmentStatus';
import {ThreatCategory} from './threatCategory';
import {ThreatExpectedAssessment} from './threatExpectedAssessment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoThreatAssessmentRequest(threatAssessmentRequest: ThreatAssessmentRequest | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(threatAssessmentRequest),
        "category": n => { threatAssessmentRequest.category = n.getEnumValue<ThreatCategory>(ThreatCategory) as any ; },
        "contentType": n => { threatAssessmentRequest.contentType = n.getEnumValue<ThreatAssessmentContentType>(ThreatAssessmentContentType) as any ; },
        "createdBy": n => { threatAssessmentRequest.createdBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "createdDateTime": n => { threatAssessmentRequest.createdDateTime = n.getDateValue() as any ; },
        "expectedAssessment": n => { threatAssessmentRequest.expectedAssessment = n.getEnumValue<ThreatExpectedAssessment>(ThreatExpectedAssessment) as any ; },
        "requestSource": n => { threatAssessmentRequest.requestSource = n.getEnumValue<ThreatAssessmentRequestSource>(ThreatAssessmentRequestSource) as any ; },
        "results": n => { threatAssessmentRequest.results = n.getCollectionOfObjectValuesFromMethod(deserializeIntoThreatAssessmentResult) as any ; },
        "status": n => { threatAssessmentRequest.status = n.getEnumValue<ThreatAssessmentStatus>(ThreatAssessmentStatus) as any ; },
    }
}

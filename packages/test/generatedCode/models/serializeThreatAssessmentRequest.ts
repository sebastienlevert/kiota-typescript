import {ThreatAssessmentRequest} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeThreatAssessmentResult} from './serializeThreatAssessmentResult';
import {ThreatAssessmentContentType} from './threatAssessmentContentType';
import {ThreatAssessmentRequestSource} from './threatAssessmentRequestSource';
import {ThreatAssessmentStatus} from './threatAssessmentStatus';
import {ThreatCategory} from './threatCategory';
import {ThreatExpectedAssessment} from './threatExpectedAssessment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeThreatAssessmentRequest(writer: SerializationWriter, threatAssessmentRequest: ThreatAssessmentRequest | undefined = {}) : void {
        serializeEntity(writer, threatAssessmentRequest)
            writer.writeEnumValue<ThreatCategory>("category", threatAssessmentRequest.category);
            writer.writeEnumValue<ThreatAssessmentContentType>("contentType", threatAssessmentRequest.contentType);
            writer.writeObjectValueFromMethod("createdBy", threatAssessmentRequest.createdBy as any, serializeIdentitySet);
            writer.writeDateValue("createdDateTime", threatAssessmentRequest.createdDateTime);
            writer.writeEnumValue<ThreatExpectedAssessment>("expectedAssessment", threatAssessmentRequest.expectedAssessment);
            writer.writeEnumValue<ThreatAssessmentRequestSource>("requestSource", threatAssessmentRequest.requestSource);
            writer.writeCollectionOfObjectValuesFromMethod("results", threatAssessmentRequest.results as any, serializeThreatAssessmentResult);
            writer.writeEnumValue<ThreatAssessmentStatus>("status", threatAssessmentRequest.status);
}

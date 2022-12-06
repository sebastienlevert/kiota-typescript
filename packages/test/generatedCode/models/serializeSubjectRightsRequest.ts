import {DataSubjectType} from './dataSubjectType';
import {SubjectRightsRequest} from './index';
import {serializeAuthoredNote} from './serializeAuthoredNote';
import {serializeDataSubject} from './serializeDataSubject';
import {serializeEntity} from './serializeEntity';
import {serializeIdentity} from './serializeIdentity';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeSubjectRightsRequestDetail} from './serializeSubjectRightsRequestDetail';
import {serializeSubjectRightsRequestHistory} from './serializeSubjectRightsRequestHistory';
import {serializeSubjectRightsRequestStageDetail} from './serializeSubjectRightsRequestStageDetail';
import {serializeTeam} from './serializeTeam';
import {SubjectRightsRequestStatus} from './subjectRightsRequestStatus';
import {SubjectRightsRequestType} from './subjectRightsRequestType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSubjectRightsRequest(writer: SerializationWriter, subjectRightsRequest: SubjectRightsRequest | undefined = {}) : void {
        serializeEntity(writer, subjectRightsRequest)
            writer.writeObjectValueFromMethod("assignedTo", subjectRightsRequest.assignedTo as any, serializeIdentity);
            writer.writeDateValue("closedDateTime", subjectRightsRequest.closedDateTime);
            writer.writeObjectValueFromMethod("createdBy", subjectRightsRequest.createdBy as any, serializeIdentitySet);
            writer.writeDateValue("createdDateTime", subjectRightsRequest.createdDateTime);
            writer.writeObjectValueFromMethod("dataSubject", subjectRightsRequest.dataSubject as any, serializeDataSubject);
            writer.writeEnumValue<DataSubjectType>("dataSubjectType", subjectRightsRequest.dataSubjectType);
            writer.writeStringValue("description", subjectRightsRequest.description);
            writer.writeStringValue("displayName", subjectRightsRequest.displayName);
            writer.writeCollectionOfObjectValuesFromMethod("history", subjectRightsRequest.history as any, serializeSubjectRightsRequestHistory);
            writer.writeObjectValueFromMethod("insight", subjectRightsRequest.insight as any, serializeSubjectRightsRequestDetail);
            writer.writeDateValue("internalDueDateTime", subjectRightsRequest.internalDueDateTime);
            writer.writeObjectValueFromMethod("lastModifiedBy", subjectRightsRequest.lastModifiedBy as any, serializeIdentitySet);
            writer.writeDateValue("lastModifiedDateTime", subjectRightsRequest.lastModifiedDateTime);
            writer.writeCollectionOfObjectValuesFromMethod("notes", subjectRightsRequest.notes as any, serializeAuthoredNote);
            writer.writeCollectionOfPrimitiveValues<string>("regulations", subjectRightsRequest.regulations);
            writer.writeCollectionOfObjectValuesFromMethod("stages", subjectRightsRequest.stages as any, serializeSubjectRightsRequestStageDetail);
            writer.writeEnumValue<SubjectRightsRequestStatus>("status", subjectRightsRequest.status);
            writer.writeObjectValueFromMethod("team", subjectRightsRequest.team as any, serializeTeam);
            writer.writeEnumValue<SubjectRightsRequestType>("type", subjectRightsRequest.type);
}

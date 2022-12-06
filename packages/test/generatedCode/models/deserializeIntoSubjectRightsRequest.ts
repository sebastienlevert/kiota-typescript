import {DataSubjectType} from './dataSubjectType';
import {deserializeIntoAuthoredNote} from './deserializeIntoAuthoredNote';
import {deserializeIntoDataSubject} from './deserializeIntoDataSubject';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoIdentity} from './deserializeIntoIdentity';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {deserializeIntoSubjectRightsRequestDetail} from './deserializeIntoSubjectRightsRequestDetail';
import {deserializeIntoSubjectRightsRequestHistory} from './deserializeIntoSubjectRightsRequestHistory';
import {deserializeIntoSubjectRightsRequestStageDetail} from './deserializeIntoSubjectRightsRequestStageDetail';
import {deserializeIntoTeam} from './deserializeIntoTeam';
import {SubjectRightsRequest} from './index';
import {SubjectRightsRequestStatus} from './subjectRightsRequestStatus';
import {SubjectRightsRequestType} from './subjectRightsRequestType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSubjectRightsRequest(subjectRightsRequest: SubjectRightsRequest | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(subjectRightsRequest),
        "assignedTo": n => { subjectRightsRequest.assignedTo = n.getObject(deserializeIntoIdentity) as any ; },
        "closedDateTime": n => { subjectRightsRequest.closedDateTime = n.getDateValue() as any ; },
        "createdBy": n => { subjectRightsRequest.createdBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "createdDateTime": n => { subjectRightsRequest.createdDateTime = n.getDateValue() as any ; },
        "dataSubject": n => { subjectRightsRequest.dataSubject = n.getObject(deserializeIntoDataSubject) as any ; },
        "dataSubjectType": n => { subjectRightsRequest.dataSubjectType = n.getEnumValue<DataSubjectType>(DataSubjectType) as any ; },
        "description": n => { subjectRightsRequest.description = n.getStringValue() as any ; },
        "displayName": n => { subjectRightsRequest.displayName = n.getStringValue() as any ; },
        "history": n => { subjectRightsRequest.history = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSubjectRightsRequestHistory) as any ; },
        "insight": n => { subjectRightsRequest.insight = n.getObject(deserializeIntoSubjectRightsRequestDetail) as any ; },
        "internalDueDateTime": n => { subjectRightsRequest.internalDueDateTime = n.getDateValue() as any ; },
        "lastModifiedBy": n => { subjectRightsRequest.lastModifiedBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "lastModifiedDateTime": n => { subjectRightsRequest.lastModifiedDateTime = n.getDateValue() as any ; },
        "notes": n => { subjectRightsRequest.notes = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAuthoredNote) as any ; },
        "regulations": n => { subjectRightsRequest.regulations = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "stages": n => { subjectRightsRequest.stages = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSubjectRightsRequestStageDetail) as any ; },
        "status": n => { subjectRightsRequest.status = n.getEnumValue<SubjectRightsRequestStatus>(SubjectRightsRequestStatus) as any ; },
        "team": n => { subjectRightsRequest.team = n.getObject(deserializeIntoTeam) as any ; },
        "type": n => { subjectRightsRequest.type = n.getEnumValue<SubjectRightsRequestType>(SubjectRightsRequestType) as any ; },
    }
}

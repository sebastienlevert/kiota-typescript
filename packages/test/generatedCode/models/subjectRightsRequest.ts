import {DataSubjectType} from './dataSubjectType';
import {AuthoredNote, DataSubject, Entity, Identity, IdentitySet, SubjectRightsRequestDetail, SubjectRightsRequestHistory, SubjectRightsRequestStageDetail, Team} from './index';
import {SubjectRightsRequestStatus} from './subjectRightsRequestStatus';
import {SubjectRightsRequestType} from './subjectRightsRequestType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SubjectRightsRequest extends Entity, Partial<Parsable> {
    /** Identity that the request is assigned to. */
    assignedTo?: Identity;
    /** The date and time when the request was closed. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    closedDateTime?: Date;
    /** Identity information for the entity that created the request. */
    createdBy?: IdentitySet;
    /** The date and time when the request was created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    createdDateTime?: Date;
    /** Information about the data subject. */
    dataSubject?: DataSubject;
    /** The type of the data subject. Possible values are: customer, currentEmployee, formerEmployee, prospectiveEmployee, student, teacher, faculty, other, unknownFutureValue. */
    dataSubjectType?: DataSubjectType;
    /** Description for the request. */
    description?: string;
    /** The name of the request. */
    displayName?: string;
    /** Collection of history change events. */
    history?: SubjectRightsRequestHistory[];
    /** Insight about the request. */
    insight?: SubjectRightsRequestDetail;
    /** The date and time when the request is internally due. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    internalDueDateTime?: Date;
    /** Identity information for the entity that last modified the request. */
    lastModifiedBy?: IdentitySet;
    /** The date and time when the request was last modified. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    lastModifiedDateTime?: Date;
    /** List of notes associcated with the request. */
    notes?: AuthoredNote[];
    /** List of regulations that this request will fulfill. */
    regulations?: string[];
    /** Information about the different stages for the request. */
    stages?: SubjectRightsRequestStageDetail[];
    /** The status of the request.. Possible values are: active, closed, unknownFutureValue. */
    status?: SubjectRightsRequestStatus;
    /** Information about the Microsoft Teams team that was created for the request. */
    team?: Team;
    /** The type of the request. Possible values are: export, delete,  access, tagForAction, unknownFutureValue. */
    type?: SubjectRightsRequestType;
}

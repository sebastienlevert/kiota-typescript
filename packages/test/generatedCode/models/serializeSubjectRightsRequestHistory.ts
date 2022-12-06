import {SubjectRightsRequestHistory} from './index';
import {serializeIdentitySet} from './serializeIdentitySet';
import {SubjectRightsRequestStage} from './subjectRightsRequestStage';
import {SubjectRightsRequestStageStatus} from './subjectRightsRequestStageStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSubjectRightsRequestHistory(writer: SerializationWriter, subjectRightsRequestHistory: SubjectRightsRequestHistory | undefined = {}) : void {
            writer.writeObjectValueFromMethod("changedBy", subjectRightsRequestHistory.changedBy as any, serializeIdentitySet);
            writer.writeDateValue("eventDateTime", subjectRightsRequestHistory.eventDateTime);
            writer.writeStringValue("@odata.type", subjectRightsRequestHistory.odataType);
            writer.writeEnumValue<SubjectRightsRequestStage>("stage", subjectRightsRequestHistory.stage);
            writer.writeEnumValue<SubjectRightsRequestStageStatus>("stageStatus", subjectRightsRequestHistory.stageStatus);
            writer.writeStringValue("type", subjectRightsRequestHistory.type);
}

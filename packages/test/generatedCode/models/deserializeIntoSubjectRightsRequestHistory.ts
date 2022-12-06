import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {SubjectRightsRequestHistory} from './index';
import {SubjectRightsRequestStage} from './subjectRightsRequestStage';
import {SubjectRightsRequestStageStatus} from './subjectRightsRequestStageStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSubjectRightsRequestHistory(subjectRightsRequestHistory: SubjectRightsRequestHistory | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "changedBy": n => { subjectRightsRequestHistory.changedBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "eventDateTime": n => { subjectRightsRequestHistory.eventDateTime = n.getDateValue() as any ; },
        "@odata.type": n => { subjectRightsRequestHistory.odataType = n.getStringValue() as any ; },
        "stage": n => { subjectRightsRequestHistory.stage = n.getEnumValue<SubjectRightsRequestStage>(SubjectRightsRequestStage) as any ; },
        "stageStatus": n => { subjectRightsRequestHistory.stageStatus = n.getEnumValue<SubjectRightsRequestStageStatus>(SubjectRightsRequestStageStatus) as any ; },
        "type": n => { subjectRightsRequestHistory.type = n.getStringValue() as any ; },
    }
}

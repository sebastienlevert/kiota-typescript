import {deserializeIntoPublicError} from './deserializeIntoPublicError';
import {SubjectRightsRequestStageDetail} from './index';
import {SubjectRightsRequestStage} from './subjectRightsRequestStage';
import {SubjectRightsRequestStageStatus} from './subjectRightsRequestStageStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSubjectRightsRequestStageDetail(subjectRightsRequestStageDetail: SubjectRightsRequestStageDetail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "error": n => { subjectRightsRequestStageDetail.error_escaped = n.getObject(deserializeIntoPublicError) as any ; },
        "@odata.type": n => { subjectRightsRequestStageDetail.odataType = n.getStringValue() as any ; },
        "stage": n => { subjectRightsRequestStageDetail.stage = n.getEnumValue<SubjectRightsRequestStage>(SubjectRightsRequestStage) as any ; },
        "status": n => { subjectRightsRequestStageDetail.status = n.getEnumValue<SubjectRightsRequestStageStatus>(SubjectRightsRequestStageStatus) as any ; },
    }
}

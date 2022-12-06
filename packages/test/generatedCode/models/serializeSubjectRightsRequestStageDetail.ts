import {SubjectRightsRequestStageDetail} from './index';
import {serializePublicError} from './serializePublicError';
import {SubjectRightsRequestStage} from './subjectRightsRequestStage';
import {SubjectRightsRequestStageStatus} from './subjectRightsRequestStageStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSubjectRightsRequestStageDetail(writer: SerializationWriter, subjectRightsRequestStageDetail: SubjectRightsRequestStageDetail | undefined = {}) : void {
            writer.writeObjectValueFromMethod("error_escaped", subjectRightsRequestStageDetail.error_escaped as any, serializePublicError);
            writer.writeStringValue("@odata.type", subjectRightsRequestStageDetail.odataType);
            writer.writeEnumValue<SubjectRightsRequestStage>("stage", subjectRightsRequestStageDetail.stage);
            writer.writeEnumValue<SubjectRightsRequestStageStatus>("status", subjectRightsRequestStageDetail.status);
}

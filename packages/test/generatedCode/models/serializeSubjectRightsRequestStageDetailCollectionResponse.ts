import {SubjectRightsRequestStageDetailCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSubjectRightsRequestStageDetail} from './serializeSubjectRightsRequestStageDetail';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSubjectRightsRequestStageDetailCollectionResponse(writer: SerializationWriter, subjectRightsRequestStageDetailCollectionResponse: SubjectRightsRequestStageDetailCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, subjectRightsRequestStageDetailCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", subjectRightsRequestStageDetailCollectionResponse.value as any, serializeSubjectRightsRequestStageDetail);
}

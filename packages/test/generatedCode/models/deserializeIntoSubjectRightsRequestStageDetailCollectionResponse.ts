import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSubjectRightsRequestStageDetail} from './deserializeIntoSubjectRightsRequestStageDetail';
import {SubjectRightsRequestStageDetailCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSubjectRightsRequestStageDetailCollectionResponse(subjectRightsRequestStageDetailCollectionResponse: SubjectRightsRequestStageDetailCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(subjectRightsRequestStageDetailCollectionResponse),
        "value": n => { subjectRightsRequestStageDetailCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSubjectRightsRequestStageDetail) as any ; },
    }
}

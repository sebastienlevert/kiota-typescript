import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSubjectRightsRequest} from './deserializeIntoSubjectRightsRequest';
import {SubjectRightsRequestCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSubjectRightsRequestCollectionResponse(subjectRightsRequestCollectionResponse: SubjectRightsRequestCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(subjectRightsRequestCollectionResponse),
        "value": n => { subjectRightsRequestCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSubjectRightsRequest) as any ; },
    }
}

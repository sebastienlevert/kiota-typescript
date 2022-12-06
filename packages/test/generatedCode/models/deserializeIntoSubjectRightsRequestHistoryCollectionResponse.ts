import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSubjectRightsRequestHistory} from './deserializeIntoSubjectRightsRequestHistory';
import {SubjectRightsRequestHistoryCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSubjectRightsRequestHistoryCollectionResponse(subjectRightsRequestHistoryCollectionResponse: SubjectRightsRequestHistoryCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(subjectRightsRequestHistoryCollectionResponse),
        "value": n => { subjectRightsRequestHistoryCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSubjectRightsRequestHistory) as any ; },
    }
}

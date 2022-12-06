import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSubjectSet} from './deserializeIntoSubjectSet';
import {SubjectSetCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSubjectSetCollectionResponse(subjectSetCollectionResponse: SubjectSetCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(subjectSetCollectionResponse),
        "value": n => { subjectSetCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSubjectSet) as any ; },
    }
}

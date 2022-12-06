import {deserializeIntoAuthoredNote} from './deserializeIntoAuthoredNote';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AuthoredNoteCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthoredNoteCollectionResponse(authoredNoteCollectionResponse: AuthoredNoteCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(authoredNoteCollectionResponse),
        "value": n => { authoredNoteCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAuthoredNote) as any ; },
    }
}

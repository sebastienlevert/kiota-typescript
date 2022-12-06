import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoOnenoteSection} from './deserializeIntoOnenoteSection';
import {OnenoteSectionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnenoteSectionCollectionResponse(onenoteSectionCollectionResponse: OnenoteSectionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(onenoteSectionCollectionResponse),
        "value": n => { onenoteSectionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOnenoteSection) as any ; },
    }
}

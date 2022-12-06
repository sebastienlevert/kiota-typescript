import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoOnenotePage} from './deserializeIntoOnenotePage';
import {OnenotePageCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnenotePageCollectionResponse(onenotePageCollectionResponse: OnenotePageCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(onenotePageCollectionResponse),
        "value": n => { onenotePageCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOnenotePage) as any ; },
    }
}

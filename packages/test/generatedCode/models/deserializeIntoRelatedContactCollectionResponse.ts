import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoRelatedContact} from './deserializeIntoRelatedContact';
import {RelatedContactCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRelatedContactCollectionResponse(relatedContactCollectionResponse: RelatedContactCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(relatedContactCollectionResponse),
        "value": n => { relatedContactCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRelatedContact) as any ; },
    }
}

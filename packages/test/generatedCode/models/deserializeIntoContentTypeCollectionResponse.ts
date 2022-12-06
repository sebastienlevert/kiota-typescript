import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoContentType} from './deserializeIntoContentType';
import {ContentTypeCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoContentTypeCollectionResponse(contentTypeCollectionResponse: ContentTypeCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(contentTypeCollectionResponse),
        "value": n => { contentTypeCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoContentType) as any ; },
    }
}

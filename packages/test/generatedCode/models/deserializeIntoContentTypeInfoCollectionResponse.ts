import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoContentTypeInfo} from './deserializeIntoContentTypeInfo';
import {ContentTypeInfoCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoContentTypeInfoCollectionResponse(contentTypeInfoCollectionResponse: ContentTypeInfoCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(contentTypeInfoCollectionResponse),
        "value": n => { contentTypeInfoCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoContentTypeInfo) as any ; },
    }
}

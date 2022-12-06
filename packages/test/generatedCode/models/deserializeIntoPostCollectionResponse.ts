import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoPost} from './deserializeIntoPost';
import {PostCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPostCollectionResponse(postCollectionResponse: PostCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(postCollectionResponse),
        "value": n => { postCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPost) as any ; },
    }
}

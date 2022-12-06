import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoThumbnailSet} from './deserializeIntoThumbnailSet';
import {ThumbnailSetCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoThumbnailSetCollectionResponse(thumbnailSetCollectionResponse: ThumbnailSetCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(thumbnailSetCollectionResponse),
        "value": n => { thumbnailSetCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoThumbnailSet) as any ; },
    }
}

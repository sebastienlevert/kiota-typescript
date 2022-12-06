import {deserializeIntoAddLargeGalleryViewOperation} from './deserializeIntoAddLargeGalleryViewOperation';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AddLargeGalleryViewOperationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAddLargeGalleryViewOperationCollectionResponse(addLargeGalleryViewOperationCollectionResponse: AddLargeGalleryViewOperationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(addLargeGalleryViewOperationCollectionResponse),
        "value": n => { addLargeGalleryViewOperationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAddLargeGalleryViewOperation) as any ; },
    }
}

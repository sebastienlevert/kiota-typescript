import {AddLargeGalleryViewOperationCollectionResponse} from './index';
import {serializeAddLargeGalleryViewOperation} from './serializeAddLargeGalleryViewOperation';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddLargeGalleryViewOperationCollectionResponse(writer: SerializationWriter, addLargeGalleryViewOperationCollectionResponse: AddLargeGalleryViewOperationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, addLargeGalleryViewOperationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", addLargeGalleryViewOperationCollectionResponse.value as any, serializeAddLargeGalleryViewOperation);
}

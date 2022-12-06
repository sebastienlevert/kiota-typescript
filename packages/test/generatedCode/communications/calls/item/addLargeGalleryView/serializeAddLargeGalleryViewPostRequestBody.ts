import {AddLargeGalleryViewPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddLargeGalleryViewPostRequestBody(writer: SerializationWriter, addLargeGalleryViewPostRequestBody: AddLargeGalleryViewPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("clientContext", addLargeGalleryViewPostRequestBody.clientContext);
}

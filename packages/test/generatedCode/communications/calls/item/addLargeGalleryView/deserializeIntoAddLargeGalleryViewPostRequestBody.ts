import {AddLargeGalleryViewPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAddLargeGalleryViewPostRequestBody(addLargeGalleryViewPostRequestBody: AddLargeGalleryViewPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "clientContext": n => { addLargeGalleryViewPostRequestBody.clientContext = n.getStringValue() as any ; },
    }
}

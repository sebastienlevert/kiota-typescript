import {deserializeIntoCommsOperation} from './deserializeIntoCommsOperation';
import {AddLargeGalleryViewOperation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAddLargeGalleryViewOperation(addLargeGalleryViewOperation: AddLargeGalleryViewOperation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCommsOperation(addLargeGalleryViewOperation),
    }
}

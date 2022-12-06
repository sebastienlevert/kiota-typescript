import {AddLargeGalleryViewOperation} from './index';
import {serializeCommsOperation} from './serializeCommsOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddLargeGalleryViewOperation(writer: SerializationWriter, addLargeGalleryViewOperation: AddLargeGalleryViewOperation | undefined = {}) : void {
        serializeCommsOperation(writer, addLargeGalleryViewOperation)
}

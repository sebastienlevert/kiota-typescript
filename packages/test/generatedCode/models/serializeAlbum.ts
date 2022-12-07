import {Album} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAlbum(writer: SerializationWriter, album: Album | undefined = {}) : void {
            writer.writeStringValue("coverImageItemId", album.coverImageItemId);
}

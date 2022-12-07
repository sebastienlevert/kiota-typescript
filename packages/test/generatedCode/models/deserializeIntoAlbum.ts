import {Album} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAlbum(album: Album | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "coverImageItemId": n => { album.coverImageItemId = n.getStringValue() as any ; },
    }
}

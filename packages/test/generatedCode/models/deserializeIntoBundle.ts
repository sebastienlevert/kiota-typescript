import {deserializeIntoAlbum} from './deserializeIntoAlbum';
import {Bundle} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBundle(bundle: Bundle | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "album": n => { bundle.album = n.getObject(deserializeIntoAlbum) as any ; },
        "childCount": n => { bundle.childCount = n.getNumberValue() as any ; },
    }
}

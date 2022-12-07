import {Bundle} from './index';
import {serializeAlbum} from './serializeAlbum';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBundle(writer: SerializationWriter, bundle: Bundle | undefined = {}) : void {
            writer.writeObjectValueFromMethod("album", bundle.album as any, serializeAlbum);
            writer.writeNumberValue("childCount", bundle.childCount);
}

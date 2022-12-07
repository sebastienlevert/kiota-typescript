import {Image} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImage(writer: SerializationWriter, image: Image | undefined = {}) : void {
            writer.writeNumberValue("height", image.height);
            writer.writeNumberValue("width", image.width);
}

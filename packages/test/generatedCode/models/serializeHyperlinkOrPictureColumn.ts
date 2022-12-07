import {HyperlinkOrPictureColumn} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeHyperlinkOrPictureColumn(writer: SerializationWriter, hyperlinkOrPictureColumn: HyperlinkOrPictureColumn | undefined = {}) : void {
            writer.writeBooleanValue("isPicture", hyperlinkOrPictureColumn.isPicture);
}

import {PrintMargin} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintMargin(writer: SerializationWriter, printMargin: PrintMargin | undefined = {}) : void {
            writer.writeNumberValue("bottom", printMargin.bottom);
            writer.writeNumberValue("left", printMargin.left);
            writer.writeNumberValue("right", printMargin.right);
            writer.writeNumberValue("top", printMargin.top);
}

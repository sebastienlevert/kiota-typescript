import {RgbColor} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRgbColor(writer: SerializationWriter, rgbColor: RgbColor | undefined = {}) : void {
            writer.writeNumberValue("b", rgbColor.b);
            writer.writeNumberValue("g", rgbColor.g);
            writer.writeStringValue("@odata.type", rgbColor.odataType);
            writer.writeNumberValue("r", rgbColor.r);
}

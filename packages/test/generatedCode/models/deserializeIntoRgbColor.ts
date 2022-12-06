import {RgbColor} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRgbColor(rgbColor: RgbColor | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "b": n => { rgbColor.b = n.getNumberValue() as any ; },
        "g": n => { rgbColor.g = n.getNumberValue() as any ; },
        "@odata.type": n => { rgbColor.odataType = n.getStringValue() as any ; },
        "r": n => { rgbColor.r = n.getNumberValue() as any ; },
    }
}

import {PrintSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintSettings(printSettings: PrintSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "documentConversionEnabled": n => { printSettings.documentConversionEnabled = n.getBooleanValue() as any ; },
        "@odata.type": n => { printSettings.odataType = n.getStringValue() as any ; },
    }
}

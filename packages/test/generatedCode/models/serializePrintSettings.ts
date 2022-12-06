import {PrintSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintSettings(writer: SerializationWriter, printSettings: PrintSettings | undefined = {}) : void {
            writer.writeBooleanValue("documentConversionEnabled", printSettings.documentConversionEnabled);
            writer.writeStringValue("@odata.type", printSettings.odataType);
}

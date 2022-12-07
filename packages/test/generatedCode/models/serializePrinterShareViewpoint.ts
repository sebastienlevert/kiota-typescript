import {PrinterShareViewpoint} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrinterShareViewpoint(writer: SerializationWriter, printerShareViewpoint: PrinterShareViewpoint | undefined = {}) : void {
            writer.writeDateValue("lastUsedDateTime", printerShareViewpoint.lastUsedDateTime);
}

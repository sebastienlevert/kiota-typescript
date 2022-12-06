import {PrinterStatus} from './index';
import {PrinterProcessingState} from './printerProcessingState';
import {PrinterProcessingStateDetail} from './printerProcessingStateDetail';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrinterStatus(writer: SerializationWriter, printerStatus: PrinterStatus | undefined = {}) : void {
            writer.writeStringValue("description", printerStatus.description);
            writer.writeEnumValue<PrinterProcessingStateDetail>("details", printerStatus.details);
            writer.writeStringValue("@odata.type", printerStatus.odataType);
            writer.writeEnumValue<PrinterProcessingState>("state", printerStatus.state);
}

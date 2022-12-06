import {PrinterCreateOperation} from './index';
import {serializePrinter} from './serializePrinter';
import {serializePrintOperation} from './serializePrintOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrinterCreateOperation(writer: SerializationWriter, printerCreateOperation: PrinterCreateOperation | undefined = {}) : void {
        serializePrintOperation(writer, printerCreateOperation)
            writer.writeStringValue("certificate", printerCreateOperation.certificate);
            writer.writeObjectValueFromMethod("printer", printerCreateOperation.printer as any, serializePrinter);
}

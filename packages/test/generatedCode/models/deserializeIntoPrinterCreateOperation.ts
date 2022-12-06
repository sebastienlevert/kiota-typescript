import {deserializeIntoPrinter} from './deserializeIntoPrinter';
import {deserializeIntoPrintOperation} from './deserializeIntoPrintOperation';
import {PrinterCreateOperation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrinterCreateOperation(printerCreateOperation: PrinterCreateOperation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoPrintOperation(printerCreateOperation),
        "certificate": n => { printerCreateOperation.certificate = n.getStringValue() as any ; },
        "printer": n => { printerCreateOperation.printer = n.getObject(deserializeIntoPrinter) as any ; },
    }
}

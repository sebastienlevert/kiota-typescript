import {PrinterStatus} from './index';
import {PrinterProcessingState} from './printerProcessingState';
import {PrinterProcessingStateDetail} from './printerProcessingStateDetail';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrinterStatus(printerStatus: PrinterStatus | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "description": n => { printerStatus.description = n.getStringValue() as any ; },
        "details": n => { printerStatus.details = n.getEnumValues<PrinterProcessingStateDetail>(PrinterProcessingStateDetail) as any ; },
        "@odata.type": n => { printerStatus.odataType = n.getStringValue() as any ; },
        "state": n => { printerStatus.state = n.getEnumValue<PrinterProcessingState>(PrinterProcessingState) as any ; },
    }
}

import {PrinterStatus} from './index';
import {PrinterProcessingState} from './printerProcessingState';
import {PrinterProcessingStateDetail} from './printerProcessingStateDetail';
import {PrinterProcessingStateReason} from './printerProcessingStateReason';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrinterStatus(printerStatus: PrinterStatus | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "description": n => { printerStatus.description = n.getStringValue() as any ; },
        "details": n => { printerStatus.details = n.getEnumValues<PrinterProcessingStateDetail>(PrinterProcessingStateDetail) as any ; },
        "processingState": n => { printerStatus.processingState = n.getEnumValue<PrinterProcessingState>(PrinterProcessingState) as any ; },
        "processingStateDescription": n => { printerStatus.processingStateDescription = n.getStringValue() as any ; },
        "processingStateReasons": n => { printerStatus.processingStateReasons = n.getEnumValues<PrinterProcessingStateReason>(PrinterProcessingStateReason) as any ; },
        "state": n => { printerStatus.state = n.getEnumValue<PrinterProcessingState>(PrinterProcessingState) as any ; },
    }
}

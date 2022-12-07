import {PrinterStatus} from './index';
import {PrinterProcessingState} from './printerProcessingState';
import {PrinterProcessingStateDetail} from './printerProcessingStateDetail';
import {PrinterProcessingStateReason} from './printerProcessingStateReason';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrinterStatus(writer: SerializationWriter, printerStatus: PrinterStatus | undefined = {}) : void {
            writer.writeStringValue("description", printerStatus.description);
            // writer.writeEnumValue<PrinterProcessingStateDetail>("details", printerStatus.details);
            writer.writeEnumValue<PrinterProcessingState>("processingState", printerStatus.processingState);
            writer.writeStringValue("processingStateDescription", printerStatus.processingStateDescription);
            // writer.writeEnumValue<PrinterProcessingStateReason>("processingStateReasons", printerStatus.processingStateReasons);
            writer.writeEnumValue<PrinterProcessingState>("state", printerStatus.state);
}

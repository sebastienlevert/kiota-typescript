import {PrintJobStatus} from './index';
import {PrintJobProcessingState} from './printJobProcessingState';
import {PrintJobStateDetail} from './printJobStateDetail';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintJobStatus(writer: SerializationWriter, printJobStatus: PrintJobStatus | undefined = {}) : void {
            writer.writeBooleanValue("acquiredByPrinter", printJobStatus.acquiredByPrinter);
            writer.writeStringValue("description", printJobStatus.description);
            //writer.writeEnumValue<PrintJobStateDetail>("details", printJobStatus.details);
            writer.writeBooleanValue("isAcquiredByPrinter", printJobStatus.isAcquiredByPrinter);
            writer.writeEnumValue<PrintJobProcessingState>("processingState", printJobStatus.processingState);
            writer.writeStringValue("processingStateDescription", printJobStatus.processingStateDescription);
            writer.writeEnumValue<PrintJobProcessingState>("state", printJobStatus.state);
}

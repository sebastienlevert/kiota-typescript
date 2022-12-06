import {ArchivedPrintJob} from './index';
import {PrintJobProcessingState} from './printJobProcessingState';
import {serializeUserIdentity} from './serializeUserIdentity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeArchivedPrintJob(writer: SerializationWriter, archivedPrintJob: ArchivedPrintJob | undefined = {}) : void {
            writer.writeBooleanValue("acquiredByPrinter", archivedPrintJob.acquiredByPrinter);
            writer.writeDateValue("acquiredDateTime", archivedPrintJob.acquiredDateTime);
            writer.writeDateValue("completionDateTime", archivedPrintJob.completionDateTime);
            writer.writeNumberValue("copiesPrinted", archivedPrintJob.copiesPrinted);
            writer.writeObjectValueFromMethod("createdBy", archivedPrintJob.createdBy as any, serializeUserIdentity);
            writer.writeDateValue("createdDateTime", archivedPrintJob.createdDateTime);
            writer.writeStringValue("id", archivedPrintJob.id);
            writer.writeStringValue("@odata.type", archivedPrintJob.odataType);
            writer.writeStringValue("printerId", archivedPrintJob.printerId);
            writer.writeEnumValue<PrintJobProcessingState>("processingState", archivedPrintJob.processingState);
}

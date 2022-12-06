import {deserializeIntoUserIdentity} from './deserializeIntoUserIdentity';
import {ArchivedPrintJob} from './index';
import {PrintJobProcessingState} from './printJobProcessingState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoArchivedPrintJob(archivedPrintJob: ArchivedPrintJob | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "acquiredByPrinter": n => { archivedPrintJob.acquiredByPrinter = n.getBooleanValue() as any ; },
        "acquiredDateTime": n => { archivedPrintJob.acquiredDateTime = n.getDateValue() as any ; },
        "completionDateTime": n => { archivedPrintJob.completionDateTime = n.getDateValue() as any ; },
        "copiesPrinted": n => { archivedPrintJob.copiesPrinted = n.getNumberValue() as any ; },
        "createdBy": n => { archivedPrintJob.createdBy = n.getObject(deserializeIntoUserIdentity) as any ; },
        "createdDateTime": n => { archivedPrintJob.createdDateTime = n.getDateValue() as any ; },
        "id": n => { archivedPrintJob.id = n.getStringValue() as any ; },
        "@odata.type": n => { archivedPrintJob.odataType = n.getStringValue() as any ; },
        "printerId": n => { archivedPrintJob.printerId = n.getStringValue() as any ; },
        "processingState": n => { archivedPrintJob.processingState = n.getEnumValue<PrintJobProcessingState>(PrintJobProcessingState) as any ; },
    }
}

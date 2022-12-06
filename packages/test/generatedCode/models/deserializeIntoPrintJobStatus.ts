import {PrintJobStatus} from './index';
import {PrintJobProcessingState} from './printJobProcessingState';
import {PrintJobStateDetail} from './printJobStateDetail';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintJobStatus(printJobStatus: PrintJobStatus | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "description": n => { printJobStatus.description = n.getStringValue() as any ; },
        "details": n => { printJobStatus.details = n.getEnumValues<PrintJobStateDetail>(PrintJobStateDetail) as any ; },
        "isAcquiredByPrinter": n => { printJobStatus.isAcquiredByPrinter = n.getBooleanValue() as any ; },
        "@odata.type": n => { printJobStatus.odataType = n.getStringValue() as any ; },
        "state": n => { printJobStatus.state = n.getEnumValue<PrintJobProcessingState>(PrintJobProcessingState) as any ; },
    }
}

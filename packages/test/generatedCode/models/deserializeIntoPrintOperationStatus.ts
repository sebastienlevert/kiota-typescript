import {PrintOperationStatus} from './index';
import {PrintOperationProcessingState} from './printOperationProcessingState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintOperationStatus(printOperationStatus: PrintOperationStatus | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "description": n => { printOperationStatus.description = n.getStringValue() as any ; },
        "@odata.type": n => { printOperationStatus.odataType = n.getStringValue() as any ; },
        "state": n => { printOperationStatus.state = n.getEnumValue<PrintOperationProcessingState>(PrintOperationProcessingState) as any ; },
    }
}

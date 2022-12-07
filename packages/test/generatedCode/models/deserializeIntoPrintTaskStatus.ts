import {PrintTaskStatus} from './index';
import {PrintTaskProcessingState} from './printTaskProcessingState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintTaskStatus(printTaskStatus: PrintTaskStatus | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "description": n => { printTaskStatus.description = n.getStringValue() as any ; },
        "state": n => { printTaskStatus.state = n.getEnumValue<PrintTaskProcessingState>(PrintTaskProcessingState) as any ; },
    }
}

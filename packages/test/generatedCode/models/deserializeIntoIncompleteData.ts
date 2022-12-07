import {IncompleteData} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIncompleteData(incompleteData: IncompleteData | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "missingDataBeforeDateTime": n => { incompleteData.missingDataBeforeDateTime = n.getDateValue() as any ; },
        "wasThrottled": n => { incompleteData.wasThrottled = n.getBooleanValue() as any ; },
    }
}

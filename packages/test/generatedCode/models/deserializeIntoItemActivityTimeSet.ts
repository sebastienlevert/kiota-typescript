import {ItemActivityTimeSet} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoItemActivityTimeSet(itemActivityTimeSet: ItemActivityTimeSet | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "lastRecordedDateTime": n => { itemActivityTimeSet.lastRecordedDateTime = n.getDateValue() as any ; },
        "observedDateTime": n => { itemActivityTimeSet.observedDateTime = n.getDateValue() as any ; },
        "recordedDateTime": n => { itemActivityTimeSet.recordedDateTime = n.getDateValue() as any ; },
    }
}

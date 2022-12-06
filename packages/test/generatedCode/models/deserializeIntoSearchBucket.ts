import {SearchBucket} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSearchBucket(searchBucket: SearchBucket | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "aggregationFilterToken": n => { searchBucket.aggregationFilterToken = n.getStringValue() as any ; },
        "count": n => { searchBucket.count = n.getNumberValue() as any ; },
        "key": n => { searchBucket.key = n.getStringValue() as any ; },
        "@odata.type": n => { searchBucket.odataType = n.getStringValue() as any ; },
    }
}

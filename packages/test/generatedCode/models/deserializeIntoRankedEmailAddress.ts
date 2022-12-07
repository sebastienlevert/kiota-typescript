import {RankedEmailAddress} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRankedEmailAddress(rankedEmailAddress: RankedEmailAddress | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "address": n => { rankedEmailAddress.address = n.getStringValue() as any ; },
        "rank": n => { rankedEmailAddress.rank = n.getNumberValue() as any ; },
    }
}

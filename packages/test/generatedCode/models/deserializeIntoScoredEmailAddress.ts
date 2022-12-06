import {ScoredEmailAddress} from './index';
import {SelectionLikelihoodInfo} from './selectionLikelihoodInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoScoredEmailAddress(scoredEmailAddress: ScoredEmailAddress | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "address": n => { scoredEmailAddress.address = n.getStringValue() as any ; },
        "itemId": n => { scoredEmailAddress.itemId = n.getStringValue() as any ; },
        "@odata.type": n => { scoredEmailAddress.odataType = n.getStringValue() as any ; },
        "relevanceScore": n => { scoredEmailAddress.relevanceScore = n.getNumberValue() as any ; },
        "selectionLikelihood": n => { scoredEmailAddress.selectionLikelihood = n.getEnumValue<SelectionLikelihoodInfo>(SelectionLikelihoodInfo) as any ; },
    }
}

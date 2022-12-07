import {ItemActionStat} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoItemActionStat(itemActionStat: ItemActionStat | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "actionCount": n => { itemActionStat.actionCount = n.getNumberValue() as any ; },
        "actorCount": n => { itemActionStat.actorCount = n.getNumberValue() as any ; },
    }
}

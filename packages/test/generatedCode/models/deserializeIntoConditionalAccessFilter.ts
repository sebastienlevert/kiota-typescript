import {FilterMode} from './filterMode';
import {ConditionalAccessFilter} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConditionalAccessFilter(conditionalAccessFilter: ConditionalAccessFilter | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "mode": n => { conditionalAccessFilter.mode = n.getEnumValue<FilterMode>(FilterMode) as any ; },
        "@odata.type": n => { conditionalAccessFilter.odataType = n.getStringValue() as any ; },
        "rule": n => { conditionalAccessFilter.rule = n.getStringValue() as any ; },
    }
}

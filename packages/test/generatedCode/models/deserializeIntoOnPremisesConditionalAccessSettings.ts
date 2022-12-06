import {deserializeIntoEntity} from './deserializeIntoEntity';
import {OnPremisesConditionalAccessSettings} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnPremisesConditionalAccessSettings(onPremisesConditionalAccessSettings: OnPremisesConditionalAccessSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(onPremisesConditionalAccessSettings),
        "enabled": n => { onPremisesConditionalAccessSettings.enabled = n.getBooleanValue() as any ; },
        "excludedGroups": n => { onPremisesConditionalAccessSettings.excludedGroups = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "includedGroups": n => { onPremisesConditionalAccessSettings.includedGroups = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "overrideDefaultRule": n => { onPremisesConditionalAccessSettings.overrideDefaultRule = n.getBooleanValue() as any ; },
    }
}

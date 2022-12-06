import {SearchAlterationOptions} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSearchAlterationOptions(searchAlterationOptions: SearchAlterationOptions | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "enableModification": n => { searchAlterationOptions.enableModification = n.getBooleanValue() as any ; },
        "enableSuggestion": n => { searchAlterationOptions.enableSuggestion = n.getBooleanValue() as any ; },
        "@odata.type": n => { searchAlterationOptions.odataType = n.getStringValue() as any ; },
    }
}

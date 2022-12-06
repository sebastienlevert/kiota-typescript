import {Prompt} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrompt(prompt: Prompt | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { prompt.odataType = n.getStringValue() as any ; },
    }
}

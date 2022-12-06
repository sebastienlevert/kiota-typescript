import {deserializeIntoPrompt} from '../../../../models/deserializeIntoPrompt';
import {PlayPromptPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlayPromptPostRequestBody(playPromptPostRequestBody: PlayPromptPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "clientContext": n => { playPromptPostRequestBody.clientContext = n.getStringValue() as any ; },
        "prompts": n => { playPromptPostRequestBody.prompts = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPrompt) as any ; },
    }
}
